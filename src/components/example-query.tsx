"use client";

import { useQuery } from "@tanstack/react-query";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { addNotification } from "@/lib/features/appSlice";

// Example API function
const fetchUserData = async (userId: string) => {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return {
    id: userId,
    name: "John Doe",
    email: "john@example.com",
    balance: "1.5 ETH",
  };
};

export function ExampleQuery() {
  const dispatch = useAppDispatch();
  const notifications = useAppSelector((state) => state.app.notifications);

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["user", "123"],
    queryFn: () => fetchUserData("123"),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  const handleAddNotification = () => {
    dispatch(
      addNotification(
        `Notification ${
          notifications.length + 1
        } - ${new Date().toLocaleTimeString()}`
      )
    );
  };

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Loading...</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="animate-pulse">Fetching user data...</div>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Error</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-red-500">Failed to load user data</div>
          <Button onClick={() => refetch()} className="mt-2">
            Retry
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>TanStack Query Example</CardTitle>
          <CardDescription>
            Demonstrating data fetching with caching and error handling
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div>
              <strong>Name:</strong> {data?.name}
            </div>
            <div>
              <strong>Email:</strong> {data?.email}
            </div>
            <div>
              <strong>Balance:</strong> {data?.balance}
            </div>
            <Button onClick={() => refetch()} className="mt-4">
              Refresh Data
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Redux Example</CardTitle>
          <CardDescription>
            Demonstrating state management with Redux Toolkit
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <Button onClick={handleAddNotification}>Add Notification</Button>
            <div className="mt-4">
              <strong>Notifications ({notifications.length}):</strong>
              <ul className="mt-2 space-y-1">
                {notifications.map((notification, index) => (
                  <li
                    key={index}
                    className="text-sm text-gray-600 dark:text-gray-400"
                  >
                    {notification}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
