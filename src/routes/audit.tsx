import { createFileRoute } from '@tanstack/react-router';
import { RecordsPage } from '@/components/crm/records';
import { metadata } from '@/lib/crm-data';
export const Route = createFileRoute('/audit')({ head: () => metadata('Audit log', 'Manage audit log in the AcxiomCRM sales workspace.'), component: () => <RecordsPage module="audit" /> });
