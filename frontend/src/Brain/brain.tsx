import { useState } from 'react';
import { createBrain } from '@/services/api';
import Sidebar from './sidebar';
import { useNavigate } from 'react-router-dom';

function Brain() {
  const navigate = useNavigate();

  // Form state
  const [form, setForm] = useState({
    contentType: '',
    contentLink: '',
    title: '',
    description: '',
    tags: '',
    manualContent: '',
  });

  // Toggle menu state
  const [toggleMenu, setToggleMenu] = useState(false);

  // Loading state for form submission
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Get token from localStorage
  const token = localStorage.getItem('token');

  // Handle form data changes
  const handleFormData = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!form.contentType || !form.title || !form.description) {
      alert("Please fill in all required fields.");
      return;
    }

    if (!token) {
      alert("You are not authorized. Please log in.");
      return;
    }

    setIsSubmitting(true); // Set submitting state to true while waiting for the response

    try {
      const brainData = await createBrain(form, token);
      console.log('Brain created successfully:', brainData);
      alert('Brain created successfully!');
      setForm({
        contentType: '',
        contentLink: '',
        title: '',
        description: '',
        tags: '',
        manualContent: '',
      });
      setToggleMenu(false); // Close the form after submission
      navigate('/page');
    } catch (error) {
      console.error('Error creating brain:', error);
      alert('Failed to create brain. Please try again later.');
    } finally {
      setIsSubmitting(false); // Reset submitting state after API call
    }
  };

  // Toggle form visibility
  const toggle = () => setToggleMenu(!toggleMenu);

  // Form input styling
  const inputCss = 'bg-gray-700 p-2 rounded-lg text-white w-80 mb-4';

  return (
    <>
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="min-h-screen w-screen bg-gray-800 justify-center items-center">
          <button
            onClick={toggle}
            className="px-4 py-2 bg-purple-400 ml-[100px] sm:ml-[200px] md:ml-[240px] lg:ml-[580px] mt-5 rounded-2xl"
          >
            {toggleMenu ? 'Close brain' : 'Create Brain'}
          </button>

          {toggleMenu && (
            <div className="min-h-screen bg-gray-800 text-center justify-center">
              <form
                className="flex flex-col items-center justify-center p-5 mt-20"
                onSubmit={handleSubmit}
              >
                <input
                  type="text"
                  name="contentType"
                  placeholder="Content Type"
                  value={form.contentType}
                  onChange={handleFormData}
                  className={inputCss}
                />
                <input
                  type="text"
                  name="contentLink"
                  placeholder="Content Link"
                  value={form.contentLink}
                  onChange={handleFormData}
                  className={inputCss}
                />
                <input
                  type="text"
                  name="title"
                  placeholder="Title"
                  value={form.title}
                  onChange={handleFormData}
                  className={inputCss}
                />
                <textarea
                  name="description"
                  placeholder="Description"
                  value={form.description}
                  onChange={handleFormData}
                  className={inputCss}
                />
                <input
                  type="text"
                  name="tags"
                  placeholder="Tags (comma-separated)"
                  value={form.tags}
                  onChange={handleFormData}
                  className={inputCss}
                />
                <textarea
                  name="manualContent"
                  placeholder="Manual Content"
                  value={form.manualContent}
                  onChange={handleFormData}
                  className={inputCss}
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-purple-400 rounded-2xl"
                  disabled={isSubmitting} // Disable button while submitting
                >
                  {isSubmitting ? 'Creating Brain...' : 'Create Brain'}
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Brain;
