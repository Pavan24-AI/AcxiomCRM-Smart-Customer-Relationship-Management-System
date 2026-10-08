import { createFileRoute } from '@tanstack/react-router';
import { RecordsPage } from '@/components/crm/records';
import { metadata } from '@/lib/crm-data';
export const Route = createFileRoute('/follow-ups')({ head: () => metadata('Follow-ups', 'Manage follow-ups in the AcxiomCRM sales workspace.'), component: () => <RecordsPage module="follow-ups" /> });
