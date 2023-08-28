import { useSelector } from "react-redux";
import AdminDashboard from "../Pages/adminPages/AdminDashboard";
import MasterManagement from "../Pages/adminPages/MasterManagement";
import PropertyManagement from "../Pages/adminPages/PropertyManagement";
import UserManagement from "../Pages/adminPages/UserManagement";
import {
  ADMIN_DASHBOARD,
  ADMIN_DASHBOARD_LOGIN,
  MASTER_MANAGEMENT,
  PROPERTY_MANAGEMENT,
  USER_MANAGEMENT,
} from "../utils/Const";
import { selectApiStatus } from "../../redux/utils/selectors";
import Login from "../Pages/Login";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function PageSelector({ pageName }) {
  const navigate = useNavigate();
  const loginStatus = useSelector((state) =>
    selectApiStatus(state, ADMIN_DASHBOARD_LOGIN)
  );

  useEffect(() => {
    if (!loginStatus) {
      navigate("/login");
    }
  }, [loginStatus]);

  return (
    <>
      {!loginStatus && <Login />}
      {pageName === ADMIN_DASHBOARD && <AdminDashboard />}
      {pageName === USER_MANAGEMENT && <UserManagement />}
      {pageName === PROPERTY_MANAGEMENT && <PropertyManagement />}
      {pageName === MASTER_MANAGEMENT && <MasterManagement />}
    </>
  );
}
