import { useParams, Navigate } from 'react-router-dom';
import ServicePage, { findServiceBySlug } from '../components/ServicePage';

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = findServiceBySlug(slug);

  if (!service) return <Navigate to="/services" replace />;

  return <ServicePage service={service} />;
}

