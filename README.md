AcxiomCRM
A role-based Customer Relationship Management (CRM) application designed to manage customers, leads, opportunities, follow-ups, activities, users, roles, audit logs, APIs, and reporting.
📌 Project Overview
AcxiomCRM is a web-based CRM application for sales organizations. The system is designed around three primary roles:
- Admin – Full system, CRM, user/role, audit, and reporting administration
- Manager – Team CRM, pipeline, follow-up, and reporting management
- Sales Executive – Management of assigned customers, leads, opportunities, follow-ups, and activities
The project specification defines a layered architecture, client-side and server-side validation, secure authentication, role-based authorization, audit logging, REST APIs, dashboards, and reporting.
🚀 Working Prototype
🔗 Live Demo: AcxiomCRM Working Prototype
The working prototype demonstrates the implemented CRM frontend screens, including customer management, lead management, lead conversion, follow-ups, and CRM navigation. Functional verification and validation testing are still in progress.

🚧 Current Development Status
Area	Status
CRM Frontend Screens	✅ Completed
Customer Management UI	✅ Built
Lead Management UI	✅ Built
Lead Conversion UI	✅ Built
Follow-Up UI	✅ Built
CRM Navigation	✅ Built
Customer Creation Verification	🔄 In Progress
Lead Conversion Verification	🔄 In Progress
Follow-Up Verification	🔄 In Progress
Navigation Testing	🔄 In Progress
Validation/Error Handling	⏳ Pending
End-to-End Testing	⏳ Pending


Current note: The CRM frontend screens have been built. Verification of customer creation, lead conversion, follow-ups, navigation, validation errors, and complete testing remains unfinished. Development/testing was temporarily paused because available platform credits were exhausted and will continue when credits are available.

✨ Core Modules
According to the project specification, AcxiomCRM contains:
1. Authentication & Authorization
   - Login, registration, logout
   - Password security
   - Account lockout
   - Role-based access control
2. Dashboard
   - Total customers
   - Total leads
   - Open opportunities
   - Won/lost opportunities
   - Sales pipeline
   - Charts and KPIs
3. Customer Management
   - Create, view, edit, search, and filter customers
   - Customer details and history
   - Duplicate prevention
   - Email and phone validation
4. Lead Management
   - Create and manage leads
   - Lead status and assignment
   - Lead qualification
   - Lead conversion to customer/opportunity
5. Follow-Up Management
   - Schedule follow-ups
   - Assign users
   - Track planned, completed, missed, and cancelled follow-ups
   - Maintain activity history
6. Opportunity Management
   - Opportunity creation and management
   - Pipeline stages
   - Amount and probability
   - Expected close date
   - Won/Lost tracking
7. Activity Management
   - Calls
   - Meetings
   - Emails
   - Tasks
8. User & Role Management
   - User creation and management
   - Role assignment
   - Activation/deactivation
   - Permissions
9. Audit Log
   - Login and failed-login events
   - Create/update/delete actions
   - Role changes
   - Security events
10. REST API
    - Customers
    - Leads
    - Opportunities
    - Follow-ups
    - Reporting data
11. Reports
    - Customer reports
    - Lead reports
    - Follow-up reports
    - Opportunity reports
    - Pipeline reports
    - Conversion reports
    - User activity
    - Audit reports
🔄 CRM Workflow
Lead-to-Customer
Create Lead
    ↓
Assign Lead
    ↓
Contact Lead
    ↓
Qualify Lead
    ↓
Convert to Customer / Opportunity
    ↓
Record Conversion in Audit Log
Follow-Up
Create Follow-Up
    ↓
Set Date
    ↓
Assign User
    ↓
Complete / Miss / Reschedule
    ↓
Update Related CRM Record
    ↓
Audit Action
🧪 Validation Requirements
The application is expected to implement validation at both client and server levels.
Client-Side Validation
- Required fields
- Email format
- Phone format
- String length
- Date validation
- Numeric/range validation
Server-Side Validation
Server-side validation must protect the application even when browser validation is bypassed.
Important business rules include:
- Customer name is required
- Customer email and phone must be valid
- Customer email and phone uniqueness must be enforced
- Duplicate customer creation must be prevented
- Opportunity amount must be greater than zero for active opportunities
- Probability must be between 0 and 100
- Active opportunity close date cannot be in the past
- New/planned follow-up date cannot be earlier than today
- Lead status must use a valid configured status
🔐 Security
The specification requires:
- Secure password hashing
- No plain-text password storage
- Password policy
- Account lockout
- Server-side authorization
- Role-based access control
- Anti-forgery protection
- Server-side request validation
- Protected REST API endpoints
- Audit logging
- Secure database credentials
- HTTPS in production
Authentication is specified to use ASP.NET Core Identity for users, password hashing, claims/roles, authentication cookies, password policy, and lockout.
👥 Role-Based Access
Module	Admin	Manager	Sales Executive
Dashboard	Full	Team	Own/Assigned
Customers	Full	Team/Business Scope	Own/Assigned
Leads	Full	Team	Own/Assigned
Follow-Ups	Full	Team	Own/Assigned
Opportunities	Full	Team	Own/Assigned
User Management	Full	Limited/Configured	No
Role Management	Full	No	No
Audit Log	Full	Limited/Configured	No
Reports	All	Management/Team	Own/Assigned


Authorization should be enforced on the server and not only by hiding navigation links.
🏗️ Application Architecture
The project specification follows a layered architecture:
Users
  ↓
Presentation Layer
  ↓
Application Layer
  ↓
Domain / Business Layer
  ↓
Data Access Layer
  ↓
Database Layer

Security + Logging + Validation + Auditing
             ↓
        Across All Layers
🗃️ Core Data Entities
The project specification defines the following primary entities:
- User
- Role
- Customer
- Lead
- Opportunity
- FollowUp
- Activity
- AuditLog
🌐 REST API
The specified API includes endpoints such as:
GET    /api/customers
GET    /api/customers/{id}
POST   /api/customers
PUT    /api/customers/{id}
DELETE /api/customers/{id}

GET    /api/leads
POST   /api/leads

GET    /api/opportunities
POST   /api/opportunities
Protected endpoints must use authentication and authorization, validate request payloads, use DTOs rather than exposing database entities directly, and return appropriate HTTP status codes.
📊 Dashboard
The dashboard is expected to provide authorized users with:
- Total Customers
- Total Leads
- Open Leads
- Total Opportunities
- Open Opportunities
- Won Opportunities
- Lost Opportunities
- Total Pipeline Value
The specification also defines Chart.js visualizations for:
- Lead Status
- Opportunity Pipeline
- Monthly Sales
🔍 Search & Filtering
Required search/filter capabilities include:
- Customers: Name, Email, Phone, Company
- Leads: Name, Company, Status, Assigned User
- Opportunities: Name, Customer, Stage, Status
- Follow-Ups: Date, Status, Assigned User, Related Customer/Lead
- Activities: Activity Type, Date, Status, Assigned User
🧪 Testing & Acceptance
The remaining verification work should cover:
- [ ] Valid and invalid login
- [ ] Logout
- [ ] Customer creation
- [ ] Invalid customer email/phone
- [ ] Duplicate customer prevention
- [ ] Lead creation
- [ ] Lead status validation
- [ ] Lead conversion
- [ ] Follow-up creation
- [ ] Follow-up date validation
- [ ] Navigation between CRM modules
- [ ] Opportunity amount validation
- [ ] Probability validation
- [ ] Expected close-date validation
- [ ] Client-side validation
- [ ] Server-side validation
- [ ] Role-based authorization
- [ ] Audit logging
- [ ] REST API authorization
- [ ] Dashboard KPI and chart verification
✅ Final Acceptance Flow
1. Open AcxiomCRM without authentication
        ↓
2. Verify protected pages are inaccessible
        ↓
3. Login with a valid user
        ↓
4. Reach Dashboard
        ↓
5. Create and validate Customer
        ↓
6. Create and convert Lead
        ↓
7. Create and verify Follow-Up
        ↓
8. Test Opportunity business rules
        ↓
9. Verify role-based access
        ↓
10. Verify audit entries
        ↓
11. Verify REST API
        ↓
12. Verify dashboard KPIs and charts
📋 Project Completion Standard
The project is not considered complete by the specification if it is only a database CRUD application. Completion requires demonstrating:
- CRM workflows
- Client-side validation
- Server-side validation
- Business rules
- Secure authentication
- Role-based authorization
- Dashboard analytics
- Audit logging
- REST API functionality
- Structured application architecture
📚 Project Documentation
The complete functional and technical requirements are documented in:
AcxiomCRM Complete Project Assignment
The documentation defines the functional scope, architecture, validation rules, security requirements, role-based authorization, CRM workflows, database entities, REST APIs, reporting requirements, testing criteria, and final acceptance scenario.
📄 License
This project is developed for academic/project evaluation and demonstration purposes.
