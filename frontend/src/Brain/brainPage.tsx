import { useState, useEffect } from 'react';
import { getUserBrains, updateBrain, deleteBrain } from '@/services/api';
import Sidebar from './sidebar';

function BrainPage() {
  const [brains, setBrains] = useState([]);
  
  interface Brain {
    _id: string;
    contentType: string;
    contentLink: string;
    title: string;
    description: string;
    tags: string;
    manualContent: string;
  }

  const [editingBrain, setEditingBrain] = useState<Brain | null>(null);
  const [form, setForm] = useState({
    contentType: '',
    contentLink: '',
    title: '',
    description: '',
    tags: '',
    manualContent: '',
  });

  const token = localStorage.getItem('token') as string;

  const fetchBrains = async () => {
    try {
      const data = await getUserBrains(token);
      setBrains(data);
    } catch (error) {
      console.error('Error fetching brains:', error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteBrain(id, token);
      alert('Brain deleted successfully!');
      fetchBrains();
    } catch (error) {
      console.error('Error deleting brain:', error);
    }
  };

  const handleEditClick = (brain: Brain) => {
    setEditingBrain(brain);
    setForm(brain);
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingBrain) {
        await updateBrain(editingBrain._id, form, token);
      }
      alert('Brain updated successfully!');
      setEditingBrain(null);
      fetchBrains();
    } catch (error) {
      console.error('Error updating brain:', error);
    }
  };

  useEffect(() => {
    fetchBrains();
  }, []);

  const inputcss = 'bg-gray-700 p-2 rounded-lg text-white w-full lg:w-80 sm:w-full mb-4';

  return (
    <div className='flex bg-gray-900 min-h-screen sm:w-full'>
      <Sidebar>
      <div className='flex-1 p-4'>
        {editingBrain ? (
          <form className='flex flex-col space-y-4 items-center' onSubmit={handleUpdate}>
            <input
              className={inputcss}
              type="text"
              placeholder='Content Type'
              name="contentType"
              value={form.contentType}
              onChange={(e) => setForm({ ...form, contentType: e.target.value })}
            />
            <input
              className={inputcss}
              type="text"
              placeholder='Content Link'
              name="contentLink"
              value={form.contentLink}
              onChange={(e) => setForm({ ...form, contentLink: e.target.value })}
            />
            <input
              className={inputcss}
              type="text"
              placeholder='Title'
              name="title"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
            />
            <textarea
              className='bg-gray-700 p-2 rounded-lg text-white w-full lg:w-80 h-24 mb-4'
              placeholder='Description'
              name="description"
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
            />
            <input
              className={inputcss}
              type="text"
              placeholder='Tags'
              name="tags"
              value={form.tags}
              onChange={(e) => setForm({ ...form, tags: e.target.value })}
            />
            <textarea
              className='bg-gray-700 p-2 rounded-lg text-white w-full lg:w-80 h-24 mb-4'
              placeholder='Manual Content'
              name="manualContent"
              value={form.manualContent}
              onChange={(e) => setForm({ ...form, manualContent: e.target.value })}
            />
            <div className='flex space-x-4'>
              <button className='px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition-colors' type="submit">
                Update Brain
              </button>
              <button
                className='px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-500 transition-colors'
                onClick={() => setEditingBrain(null)}
              >
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 p-4'>
            {brains.map((brain: Brain) => (
              <div
                key={brain._id}
                className='border border-blue-400 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 p-6 shadow-lg transition-transform transform hover:scale-105'
              >
                <h3 className='text-2xl font-bold text-gray-900 mb-2'>{brain.title}</h3>
                <p className='text-lg text-gray-800 mb-2'><strong>Description:</strong> {brain.description}</p>
                <p className='text-lg text-gray-800 mb-2'><strong>Content Type:</strong> {brain.contentType}</p>
                <a
                  href={brain.contentLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-lg text-blue-200 underline mb-2 block text-wrap'
                >
                  {brain.contentLink}
                </a>
                <p className='text-lg text-gray-800 mb-4'><strong>Tags:</strong> {brain.tags}</p>
                <div className='flex space-x-2'>
                  <button
                    className='px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition-colors'
                    onClick={() => handleEditClick(brain)}
                  >
                    Update
                  </button>
                  <button
                    className='px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-500 transition-colors'
                    onClick={() => handleDelete(brain._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      </Sidebar>
    </div>
  );
}

export default BrainPage;
