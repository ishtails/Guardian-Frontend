import useFetchProfile from "../helpers/fetchUserHook";
import AdminDashboard from "../pages/admin/dashboard";
import SecurityDashboard from "../pages/security/dashboard";
import StudentDashboard from "../pages/student/dashboard";
import LoginScreen from "../pages/common/login";

const Dashboard = () => {
  const { user, isLoading } = useFetchProfile("/profile");

  if (isLoading) {
    return <div>Home Loading...</div>;
  }

  if (user?.role === "admin") {
    return <AdminDashboard />;
  }

  if (user?.role === "security") {
    return <SecurityDashboard />;
  }

  if (user?.role === "student") {
    return <StudentDashboard />;
  }

  if (!user?.role && !isLoading) {
    return <LoginScreen />
  }
};

export default Dashboard;
