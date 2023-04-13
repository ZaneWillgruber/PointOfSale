// Import the useUser hook from the Auth0 Next.js SDK
import Profile from '@/components/Profile';

// Import the Link component from Next.js
import Link from 'next/link';
//Import useUser from auth0 for if statements and such
import { useUser } from '@auth0/nextjs-auth0/client';


// Define a custom component for the page
export default function Home() {
  const { user, error, isLoading } = useUser();
// If the user is logged in, show a welcome message and a logout button
if (user){
    return (
      <div>
        <h1>Welcome {user.name}!</h1>
        <Profile></Profile>
        <p>You are logged in with Auth0.</p>
        <a href="/api/auth/logout">Log out</a>
        <ul>
          <li><Link href="/drawTest">Draw Test</Link></li>
          <li><Link href="/payments_report">Payments Report</Link></li>
          <li><Link href="/inventory_items_report">Inventory Items Report</Link></li>
          <li><Link href="/orders_report">Orders Report</Link></li>
          <li><Link href="/categories">Categories</Link></li>
          <p></p>
          <li><Link href="/roleprotected">NEW ROLE TESTING</Link></li>
        </ul>
      </div>
    );
    }
    else{
  // If the user is not logged in, show a login button
  return (
    <div>
      <h1>Zamaco POS</h1>
      <p>Please log in to continue.</p>
      <a href="/api/auth/login">Log in</a>
    </div>
  );
    }
}
