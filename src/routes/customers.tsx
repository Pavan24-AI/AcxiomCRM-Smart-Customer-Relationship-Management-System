import { createFileRoute } from '@tanstack/react-router';
import { RecordsPage } from '@/components/crm/records';
import { metadata } from '@/lib/crm-data';
export const Route = createFileRoute('/customers')({ head: () => metadata('Customers', 'Manage customers in the AcxiomCRM sales workspace.'), component: () => <RecordsPage module="customers" /> });
