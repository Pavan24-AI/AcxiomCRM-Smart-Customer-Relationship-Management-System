import { createFileRoute } from '@tanstack/react-router';
import { RecordsPage } from '@/components/crm/records';
import { metadata } from '@/lib/crm-data';
export const Route = createFileRoute('/users')({ head: () => metadata('Users and roles', 'Manage users and roles in the AcxiomCRM sales workspace.'), component: () => <RecordsPage module="users" /> });
