import { createFileRoute } from '@tanstack/react-router';
import { Dashboard } from '@/components/crm/dashboard';
import { metadata } from '@/lib/crm-data';
export const Route = createFileRoute('/')({ head: () => metadata('Sales dashboard', 'Your AcxiomCRM sales workspace: customers, leads, opportunities, pipeline performance, and upcoming follow-ups.'), component: Dashboard });
