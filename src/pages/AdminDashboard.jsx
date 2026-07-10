import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import toast from 'react-hot-toast';
import { useAuth } from '../context/AuthContext';
import API from '../utils/api';
import Seo from '../components/Seo';

const TABS = ['Dashboard', 'Products', 'Enquiries'];

const statusColors = {
  new: { bg: '#EEF2FF', text: '#4338CA', label: 'New' },
  contacted: { bg: '#FFF7ED', text: '#C2410C', label: 'Contacted' },
  resolved: { bg: '#F0FDF4', text: '#15803D', label: 'Resolved' },
  closed: { bg: '#F3F4F6', text: '#4B5563', label: 'Closed' }
};

const categories = ['Single Phase', 'Three Phase', 'Wireless', 'Protection', 'Industrial', 'Agricultural', 'IoT/Smart', 'Accessories'];

// --- Stat Card ---
const StatCard = ({ icon, label, value, sub, color }) => (
  <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
    <div className="flex items-center justify-between mb-3">
      <div className="text-2xl">{icon}</div>
      <div className="text-xs font-semibold px-2 py-1 rounded-full" style={{ background: `${color}20`, color }}>{sub}</div>
    </div>
    <div className="font-display font-bold text-3xl text-dark-navy mb-1">{value}</div>
    <div className="text-gray-500 text-sm">{label}</div>
  </div>
);

// --- Product Form Modal ---
const ProductModal = ({ product, onClose, onSave }) => {
  const [uploading, setUploading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: product ? {
      name: product.name,
      category: product.category,
      shortDescription: product.shortDescription,
      description: product.description,
      features: product.features?.join(', '),
      keywords: product.keywords?.join(', '),
      isFeatured: product.isFeatured,
      isActive: product.isActive !== false,
      sortOrder: product.sortOrder || 0
    } : { isActive: true, sortOrder: 0 }
  });

  const onSubmit = async (data) => {
    try {
      setUploading(true);
      const formData = new FormData();
      Object.entries(data).forEach(([k, v]) => {
        if (k !== 'image') formData.append(k, v);
      });
      if (data.image?.[0]) formData.append('image', data.image[0]);

      if (product?._id) {
        await API.put(`/products/${product._id}`, formData, { headers: { 'Content-Type': 'multipart/form-data' } });
        toast.success('Product updated!');
      } else {
        await API.post('/products', formData, { headers: { 'Content-Type': 'multipart/form-data' } });
        toast.success('Product created!');
      }
      onSave();
    } catch (err) {
      toast.error(err.response?.data?.message || 'Something went wrong');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: 'rgba(10,22,40,0.7)', backdropFilter: 'blur(4px)' }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl"
      >
        <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between rounded-t-2xl z-10">
          <h2 className="font-display font-bold text-dark-navy text-lg">{product ? 'Edit Product' : 'Add New Product'}</h2>
          <button onClick={onClose} className="w-8 h-8 rounded-lg hover:bg-gray-100 flex items-center justify-center text-gray-500">✕</button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Product Name *</label>
              <input {...register('name', { required: 'Name is required' })} className="form-input" placeholder="Product name" />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Category *</label>
              <select {...register('category', { required: true })} className="form-input">
                <option value="">Select category</option>
                {categories.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Sort Order</label>
              <input {...register('sortOrder')} type="number" className="form-input" placeholder="0" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Short Description</label>
              <input {...register('shortDescription')} className="form-input" placeholder="Brief one-line description" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Description</label>
              <textarea {...register('description', { required: 'Description is required' })} rows={3} className="form-input resize-none" placeholder="Detailed product description" />
              {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description.message}</p>}
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Features (comma separated)</label>
              <input {...register('features')} className="form-input" placeholder="Auto ON/OFF, Dry Run Protection, Overflow Prevention" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1.5">SEO Keywords (comma separated)</label>
              <input {...register('keywords')} className="form-input" placeholder="water level controller, pump controller" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Product Image</label>
              <input {...register('image')} type="file" accept="image/*" className="form-input py-2 text-sm text-gray-500 file:mr-3 file:py-1 file:px-3 file:rounded-lg file:border-0 file:bg-primary-50 file:text-primary-700 file:text-xs file:font-medium" />
              {product?.image && <p className="text-xs text-gray-400 mt-1">Current image exists. Upload to replace.</p>}
            </div>
            <div className="flex items-center gap-6 pt-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input {...register('isFeatured')} type="checkbox" className="w-4 h-4 accent-primary-500" />
                <span className="text-sm text-gray-700">Featured</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input {...register('isActive')} type="checkbox" className="w-4 h-4 accent-primary-500" />
                <span className="text-sm text-gray-700">Active</span>
              </label>
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            <button type="button" onClick={onClose} className="flex-1 btn-outline-aqua justify-center py-3">Cancel</button>
            <button type="submit" disabled={uploading} className="flex-1 btn-aqua justify-center py-3">
              {uploading ? (
                <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Saving...</>
              ) : product ? 'Update Product' : 'Add Product'}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

// --- Main Dashboard ---
export default function AdminDashboard() {
  const [tab, setTab] = useState('Dashboard');
  const [products, setProducts] = useState([]);
  const [enquiries, setEnquiries] = useState([]);
  const [stats, setStats] = useState({});
  const [loading, setLoading] = useState(false);
  const [productModal, setProductModal] = useState(null); // null | 'new' | productObj
  const [enquiryFilter, setEnquiryFilter] = useState('');
  const [enqPage, setEnqPage] = useState(1);
  const [enqTotal, setEnqTotal] = useState(0);
  const navigate = useNavigate();
  const { admin, logout } = useAuth();

  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true);
      const res = await API.get('/products/admin/all');
      setProducts(res.data.data || []);
    } catch { toast.error('Failed to load products'); }
    finally { setLoading(false); }
  }, []);

  const fetchEnquiries = useCallback(async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams({ page: enqPage, limit: 15 });
      if (enquiryFilter) params.append('status', enquiryFilter);
      const res = await API.get(`/enquiries?${params}`);
      setEnquiries(res.data.data || []);
      setEnqTotal(res.data.total || 0);
      // Build stats map
      const sm = {};
      (res.data.stats || []).forEach(s => { sm[s._id] = s.count; });
      setStats(sm);
    } catch { toast.error('Failed to load enquiries'); }
    finally { setLoading(false); }
  }, [enqPage, enquiryFilter]);

  useEffect(() => {
    if (tab === 'Products') fetchProducts();
    if (tab === 'Enquiries' || tab === 'Dashboard') fetchEnquiries();
  }, [tab, fetchProducts, fetchEnquiries]);

  const deleteProduct = async (id) => {
    if (!window.confirm('Delete this product?')) return;
    try {
      await API.delete(`/products/${id}`);
      toast.success('Product deleted');
      fetchProducts();
    } catch { toast.error('Failed to delete'); }
  };

  const updateEnquiryStatus = async (id, status) => {
    try {
      await API.put(`/enquiries/${id}`, { status });
      toast.success('Status updated');
      fetchEnquiries();
    } catch { toast.error('Failed to update'); }
  };

  const deleteEnquiry = async (id) => {
    if (!window.confirm('Delete this enquiry?')) return;
    try {
      await API.delete(`/enquiries/${id}`);
      toast.success('Enquiry deleted');
      fetchEnquiries();
    } catch { toast.error('Failed to delete'); }
  };

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  return (
    <>
      <Seo title="Admin Dashboard" description="Manage products and enquiries for Laksh Automations." noindex />
      <div className="min-h-screen" style={{ background: '#F4FBFF' }}>
      {/* Header */}
      <div style={{ background: 'linear-gradient(135deg, #0A1628, #0D2347)' }} className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #0077FF, #00B4D8)' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2C12 2 4 8.5 4 14a8 8 0 0016 0C20 8.5 12 2 12 2Z"/>
                </svg>
              </div>
              <span className="font-display font-bold text-white text-sm">Laksh Automations Admin</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-white/60 text-sm hidden sm:block">👋 {admin?.name}</span>
              <a href="/" target="_blank" rel="noopener noreferrer" className="text-secondary-400 text-sm hover:text-white transition-colors duration-200">View Site</a>
              <button onClick={handleLogout} className="text-white/60 text-sm hover:text-red-400 transition-colors duration-200">Sign Out</button>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-0">
            {TABS.map(t => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className="px-6 py-4 text-sm font-medium transition-all duration-200 border-b-2 -mb-px"
                style={{
                  color: tab === t ? '#0077FF' : '#6B7280',
                  borderColor: tab === t ? '#0077FF' : 'transparent',
                  background: 'transparent'
                }}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* DASHBOARD TAB */}
        {tab === 'Dashboard' && (
          <div>
            <h2 className="font-display font-bold text-dark-navy text-2xl mb-6">Overview</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
              <StatCard icon="📧" label="Total Enquiries" value={Object.values(stats).reduce((a, b) => a + b, 0)} sub="All time" color="#0077FF" />
              <StatCard icon="🆕" label="New Enquiries" value={stats.new || 0} sub="Pending" color="#7C3AED" />
              <StatCard icon="✅" label="Resolved" value={stats.resolved || 0} sub="Completed" color="#059669" />
              <StatCard icon="📦" label="Products" value={products.length || '—'} sub="Active" color="#D97706" />
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
                <h3 className="font-display font-semibold text-dark-navy">Latest Enquiries</h3>
                <button onClick={() => setTab('Enquiries')} className="text-primary-500 text-sm hover:underline">View all →</button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr style={{ background: '#F8FAFC' }}>
                      {['Name', 'Mobile', 'City', 'Product', 'Status', 'Date'].map(h => (
                        <th key={h} className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {enquiries.slice(0, 8).map(e => (
                      <tr key={e._id} className="hover:bg-gray-50 transition-colors duration-150">
                        <td className="px-4 py-3 text-sm font-medium text-dark-navy">{e.name}</td>
                        <td className="px-4 py-3 text-sm text-gray-600">{e.mobile}</td>
                        <td className="px-4 py-3 text-sm text-gray-600">{e.city}</td>
                        <td className="px-4 py-3 text-sm text-gray-600 max-w-[200px] truncate">{e.productRequired}</td>
                        <td className="px-4 py-3">
                          <span className="text-xs font-semibold px-2 py-1 rounded-full" style={{ background: statusColors[e.status]?.bg, color: statusColors[e.status]?.text }}>
                            {statusColors[e.status]?.label}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-xs text-gray-400">{new Date(e.createdAt).toLocaleDateString('en-IN')}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {enquiries.length === 0 && !loading && (
                  <div className="py-12 text-center text-gray-400">No enquiries yet</div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* PRODUCTS TAB */}
        {tab === 'Products' && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-display font-bold text-dark-navy text-2xl">Products ({products.length})</h2>
              <button onClick={() => setProductModal('new')} className="btn-aqua text-sm py-2.5 px-5">
                + Add Product
              </button>
            </div>

            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="bg-white rounded-2xl p-5 animate-pulse">
                    <div className="h-4 bg-gray-200 rounded mb-3" />
                    <div className="h-3 bg-gray-100 rounded w-2/3 mb-4" />
                    <div className="h-8 bg-gray-200 rounded" />
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr style={{ background: '#F8FAFC' }}>
                        {['#', 'Product Name', 'Category', 'Status', 'Featured', 'Actions'].map(h => (
                          <th key={h} className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                      {products.map((p, i) => (
                        <tr key={p._id} className="hover:bg-gray-50 transition-colors duration-150">
                          <td className="px-4 py-3 text-xs text-gray-400">{i + 1}</td>
                          <td className="px-4 py-3">
                            <div className="font-medium text-dark-navy text-sm">{p.name}</div>
                            {p.shortDescription && <div className="text-xs text-gray-400 truncate max-w-[280px]">{p.shortDescription}</div>}
                          </td>
                          <td className="px-4 py-3">
                            <span className="text-xs font-medium px-2.5 py-1 rounded-full" style={{ background: '#EEF2FF', color: '#4338CA' }}>{p.category}</span>
                          </td>
                          <td className="px-4 py-3">
                            <span className="text-xs font-semibold px-2 py-1 rounded-full" style={{ background: p.isActive ? '#F0FDF4' : '#FEF2F2', color: p.isActive ? '#15803D' : '#B91C1C' }}>
                              {p.isActive ? 'Active' : 'Inactive'}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-center">
                            {p.isFeatured ? <span className="text-yellow-500">⭐</span> : <span className="text-gray-300">—</span>}
                          </td>
                          <td className="px-4 py-3">
                            <div className="flex gap-2">
                              <button onClick={() => setProductModal(p)} className="text-xs px-3 py-1.5 rounded-lg text-primary-600 hover:bg-primary-50 font-medium transition-colors duration-150">Edit</button>
                              <button onClick={() => deleteProduct(p._id)} className="text-xs px-3 py-1.5 rounded-lg text-red-600 hover:bg-red-50 font-medium transition-colors duration-150">Delete</button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {products.length === 0 && <div className="py-12 text-center text-gray-400">No products. Add your first product.</div>}
                </div>
              </div>
            )}
          </div>
        )}

        {/* ENQUIRIES TAB */}
        {tab === 'Enquiries' && (
          <div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
              <h2 className="font-display font-bold text-dark-navy text-2xl">Enquiries ({enqTotal})</h2>
              <div className="flex gap-2 flex-wrap">
                {['', 'new', 'contacted', 'resolved', 'closed'].map(s => (
                  <button
                    key={s}
                    onClick={() => { setEnquiryFilter(s); setEnqPage(1); }}
                    className="px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200"
                    style={{
                      background: enquiryFilter === s ? 'linear-gradient(135deg, #0077FF, #00B4D8)' : 'white',
                      color: enquiryFilter === s ? 'white' : '#6B7280',
                      border: '1.5px solid',
                      borderColor: enquiryFilter === s ? 'transparent' : '#E5E7EB'
                    }}
                  >
                    {s === '' ? 'All' : statusColors[s]?.label}
                    {s && stats[s] ? ` (${stats[s]})` : ''}
                  </button>
                ))}
              </div>
            </div>

            {loading ? (
              <div className="space-y-3">
                {[...Array(5)].map((_, i) => <div key={i} className="bg-white rounded-xl p-5 animate-pulse h-20" />)}
              </div>
            ) : (
              <div className="space-y-3">
                {enquiries.map(e => (
                  <div key={e._id} className="bg-white rounded-2xl border border-gray-100 p-5 hover:border-primary-200 transition-all duration-200">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-1">
                          <span className="font-display font-semibold text-dark-navy text-sm">{e.name}</span>
                          <span className="text-xs font-semibold px-2 py-0.5 rounded-full" style={{ background: statusColors[e.status]?.bg, color: statusColors[e.status]?.text }}>
                            {statusColors[e.status]?.label}
                          </span>
                          {!e.emailSent && <span className="text-xs px-1.5 py-0.5 rounded bg-orange-50 text-orange-600">Email pending</span>}
                        </div>
                        <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-500">
                          <span>📞 {e.mobile}</span>
                          <span>📍 {e.city}</span>
                          <span>🗓 {new Date(e.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                        </div>
                        <div className="text-xs text-gray-600 mt-1.5 font-medium">📦 {e.productRequired}</div>
                        {e.message && <div className="text-xs text-gray-400 mt-1 italic">"{e.message}"</div>}
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <select
                          value={e.status}
                          onChange={(ev) => updateEnquiryStatus(e._id, ev.target.value)}
                          className="text-xs px-2 py-1.5 rounded-lg border border-gray-200 bg-gray-50 font-medium cursor-pointer"
                          style={{ color: statusColors[e.status]?.text }}
                        >
                          {Object.entries(statusColors).map(([k, v]) => (
                            <option key={k} value={k}>{v.label}</option>
                          ))}
                        </select>
                        <a href={`tel:${e.mobile}`} className="px-3 py-1.5 text-xs rounded-lg bg-green-50 text-green-700 font-medium hover:bg-green-100 transition-colors duration-150">Call</a>
                        <a href={`https://wa.me/91${e.mobile}?text=Hello ${encodeURIComponent(e.name)}, this is Laksh Automations regarding your enquiry for ${encodeURIComponent(e.productRequired)}.`} target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 text-xs rounded-lg bg-green-50 text-green-700 font-medium hover:bg-green-100 transition-colors duration-150">WhatsApp</a>
                        <button onClick={() => deleteEnquiry(e._id)} className="px-3 py-1.5 text-xs rounded-lg bg-red-50 text-red-600 font-medium hover:bg-red-100 transition-colors duration-150">Delete</button>
                      </div>
                    </div>
                  </div>
                ))}
                {enquiries.length === 0 && <div className="py-16 text-center text-gray-400">No enquiries found</div>}
              </div>
            )}

            {/* Pagination */}
            {enqTotal > 15 && (
              <div className="flex justify-center gap-2 mt-6">
                <button disabled={enqPage === 1} onClick={() => setEnqPage(p => p - 1)} className="px-4 py-2 rounded-lg text-sm border border-gray-200 disabled:opacity-40 hover:bg-gray-50 transition-colors duration-150">← Prev</button>
                <span className="px-4 py-2 text-sm text-gray-600">Page {enqPage} of {Math.ceil(enqTotal / 15)}</span>
                <button disabled={enqPage >= Math.ceil(enqTotal / 15)} onClick={() => setEnqPage(p => p + 1)} className="px-4 py-2 rounded-lg text-sm border border-gray-200 disabled:opacity-40 hover:bg-gray-50 transition-colors duration-150">Next →</button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Product Modal */}
      <AnimatePresence>
        {productModal && (
          <ProductModal
            product={productModal === 'new' ? null : productModal}
            onClose={() => setProductModal(null)}
            onSave={() => { setProductModal(null); fetchProducts(); }}
          />
        )}
      </AnimatePresence>
    </div>
    </>
  );
}
