import { createFileRoute } from '@tanstack/react-router';
import { ReportsPage } from '@/components/crm/reports';
import { metadata } from '@/lib/crm-data';
export const Route = createFileRoute('/reports')({ head: () => metadata('Sales reports', 'Explore customer, lead conversion, pipeline, follow-up, user activity, and audit reports in AcxiomCRM.'), component: ReportsPage });
