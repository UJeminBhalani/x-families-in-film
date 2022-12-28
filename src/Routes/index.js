
export const PublicRoutes = [
    "/login",
    "/",
    "/signup",
    "/employer/confirm-production",
    "/wrong-production",
    "/employee/confirm-production",
    "/union/confirm-production",
    "/reset_password",
    "/reset_link_expired",
    "/invite_link_expired"
];

export const AdminRoutes = [
    "/admin/caregivers",
    "/admin/dashboard",
    "/admin/employers",
    "/employers/add",
    "/admin/productions",
    "/admin/employerRequests",
    "/admin/updateEmployer/:id",
    "/admin/updateCaregiver",
    "/employers/productionslist",
    "/employers/addproduction",
    "/admin/archive-employers"
];

export const EmployeeRoutes = [
    "/employee/dashboard",
    "/employee/productions",
    "/employee/finished/productions",
    "/employee/focused-productions",
    "/employee/requests",
    "/employee/requests/success",
    "/employee/booking",
    "/employee/settings",
    "/employee/profile",
    "/employee/listing"
]
export const EmployerRoutes = [
    "/employee/union-manage",
    "/employer/balances",
    "/employer/union-request-approval",
    "/employer/employee-request-approval",
    "/employer/update-union",
    "/employer/dashboard",
    "/employer/updateUnion",
    "/employer/unions",
    "/employer/employees/addFamily",
    "/employer/employees",
    "/employer/employees-manage",
    "/employer/success_confirmation",
    "/employer/calendar",
    "/employer/crew_schedule",
    "/employer/profile",
    "/employer/settings",
    "/employer/unions-archive",
    "/employer/employee-archive"

]
export const UnionRoutes = [
    "/union/dashboard",
    "/union/productions",
    "/union/production/detail",
    "/union/balances",
    "/confirmation",
    "/union/settings",
    "/union/success_confirmation"
]
export const CaregiverRoutes = [
    '/caregiver/profile',
    '/caregiver/dashboard',
    '/caregiver/requests',
    '/caregiver/calendar'
]

export const CaregiverSidebar = ['Dashboard', 'Calendar', 'Requests', 'Profile']
export const AdminSidebar = ['Dashboard', "Productions", "Employers", "Caregivers"]
export const UnionSidebar = ['Dashboard', "Productions", "Balances", "Settings"]
export const EmployerSidebar = ['Dashboard', "Calendar", "Balances","Employees", "Unions", "Profile", "Settings"]
export const EmployeeSidebar = ['Dashboard', "Productions", "Requests", "Booking", "Profile", "Settings"]

export const Routes = [
    {
        name: "PublicRoutes",
        routes: PublicRoutes,
        sidebar: []
    },
    {
        name: "AdminRoutes",
        routes: AdminRoutes,
        sidebar: AdminSidebar,
    },
    {
        name: "EmployeeRoutes",
        routes: EmployeeRoutes,
        sidebar: EmployeeSidebar
    },
    {
        name: "EmployerRoutes",
        routes: EmployerRoutes,
        sidebar: EmployerSidebar
    },
    {
        name: "UnionRoutes",
        routes: UnionRoutes,
        sidebar: UnionSidebar
    },
    {
        name: "CaregiverRoutes",
        routes: CaregiverRoutes,
        sidebar: CaregiverSidebar
    }
]