import { createFileRoute } from '@tanstack/react-router';
import { RecordsPage } from '@/components/crm/records';
import { metadata } from '@/lib/crm-data';
export const Route = createFileRoute('/leads')({ head: () => metadata('Leads', 'Manage leads in the AcxiomCRM sales workspace.'), component: () => <RecordsPage module="leads" /> });
