import { useState } from 'react';
import { RowDataPacket } from 'mysql2';
import styled from 'styled-components';
import { format } from 'date-fns';
import db from '../../db';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

const Container = styled.div`
  background-color: #ede6f5;
  padding: 20px;
`;

const Title = styled.h1`
  color: #8447c9;
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;

  label {
    display: flex;
    flex-direction: column;
    font-size: 14px;
    font-weight: bold;
    margin-right: 20px;
    width: 50%;

    input {
      background-color: #fff;
      border: 1px solid #ccc;
      border-radius: 4px;
      box-sizing: border-box;
      font-size: 14px;
      padding: 10px;
      width: 100%;
    }
  }
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;

  th, td {
    border: 1px solid #ddd;
    padding: 12px;
    text-align: left;
  }

  th {
    background-color: #5f4b8b;
    color: #ede6f5;
    font-weight: bold;
  }

  tbody tr:nth-child(even) {
    background-color: #d7c3eb;
  }
`;

interface Order {
  order_id: number;
  total_amount: number;
  order_date: string;
}

interface OrdersReportPageProps {
  orders: Order[];
}

const OrdersReportPage: React.FC<OrdersReportPageProps> = ({ orders }) => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>, setter: React.Dispatch<React.SetStateAction<Date | null>>) => {
    const date = new Date(event.target.value);
    if (!isNaN(date.getTime())) {
      setter(date);
    }
  };

  const filteredOrders = orders.filter((order: Order) => {
    if (!startDate || !endDate) {
      return true;
    }
  
    const orderDate = new Date(order.order_date);
    return orderDate >= startDate && orderDate < new Date(endDate.getTime() + 24 * 60 * 60 * 1000);
  });  

  return (
    <Container>
      <div style = {{ marginTop: "60px" }}>
        <Title>Orders</Title>
        <Form>
          <label>
            Start date:
            <input type="date" onChange={(e) => handleDateChange(e, setStartDate)} />
          </label>
          <label>
            End date:
            <input type="date" onChange={(e) => handleDateChange(e, setEndDate)} />
          </label>
        </Form>
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Total Amount</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map((order: Order) => (
              <tr key={order.order_id}>
                <td>{order.order_id}</td>
                <td>${order.total_amount}</td>
                <td>{format(new Date(order.order_date), 'MMM d, yyyy')}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Container>
  );
};

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(context) {
    const connection = await db();
    const [rows] = await connection.query(`
      SELECT order_id, total_amount, order_date
      FROM orders
      `);

    await connection.end();

    const orders: Order[] = (rows as RowDataPacket[]).map((row: any) => {
      return {
        order_id: row.order_id,
        total_amount: row.total_amount,
        order_date: new Date(row.order_date).toISOString(),
      };
    });

    return {
      props: {
        orders: orders,
      },
    };
  },
});

export default OrdersReportPage;