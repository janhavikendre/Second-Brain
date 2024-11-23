import { useState } from 'react';
import { createBrain } from '@/services/api';
import Sidebar from './sidebar';
// import { Sidebar } from 'lucide-react';
function Brain() {
  const [form, setForm] = useState({
    contentType: '',
    contentLink: '',
    title: '',
    description: '',
    tags: '',
    manualContent: '',
  });

  const token = localStorage.getItem('token') as string;

  const HandleFormData = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const HandleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
    } catch (error) {
      console.error('Error creating brain:', error);
      alert('Failed to create brain. Please try again later.');
    }
  };
  
    
  return (<>
    <div className="bg-gray-800 min-h-screen">
    <Sidebar />
      <div className="flex justify-center ml-62 items-center py-6">
        <img
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNiNjk2YzUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1icmFpbiI+PHBhdGggZD0iTTEyIDVhMyAzIDAgMSAwLTUuOTk3LjEyNSA0IDQgMCAwIDAtMi41MjYgNS43NyA0IDQgMCAwIDAgLjU1NiA2LjU4OEE0IDQgMCAxIDAgMTIgMThaIi8+PHBhdGggZD0iTTEyIDVhMyAzIDAgMSAxIDUuOTk3LjEyNSA0IDQgMCAwIDEgMi41MjYgNS43NyA0IDQgMCAwIDEtLjU1NiA2LjU4OEE0IDQgMCAxIDEgMTIgMThaIi8+PHBhdGggZD0iTTE1IDEzYTQuNSA0LjUgMCAwIDEtMy00IDQuNSA0LjUgMCAwIDEtMyA0Ii8+PHBhdGggZD0iTTE3LjU5OSA2LjVhMyAzIDAgMCAwIC4zOTktMS4zNzUiLz48cGF0aCBkPSJNNi4wMDMgNS4xMjVBMyAzIDAgMCAwIDYuNDAxIDYuNSIvPjxwYXRoIGQ9Ik0zLjQ3NyAxMC44OTZhNCA0IDAgMCAxIC41ODUtLjM5NiIvPjxwYXRoIGQ9Ik0xOS45MzggMTAuNWE0IDQgMCAwIDEgLjU4NS4zOTYiLz48cGF0aCBkPSJNNiAxOGE0IDQgMCAwIDEtMS45NjctLjUxNiIvPjxwYXRoIGQ9Ik0xOS45NjcgMTcuNDg0QTQgNCAwIDAgMSAxOCAxOCIvPjwvc3ZnPg=="
          alt="Logo"
          className="w-7 h-7 rounded-full"
        />
        <h1 className="text-4xl font-bold text-white ml-3">Second Brain</h1>
      </div>
      <div className="text-xl flex justify-center items-center">
        <form onSubmit={HandleSubmit} className="flex flex-col w-full max-w-md space-y-4">
          <input
            type="text"
            name="contentType"
            placeholder="Content Type"
            value={form.contentType}
            onChange={HandleFormData}
            className=" rounded-full p-2 text-black"
          />
          <input
            type="text"
            name="contentLink"
            placeholder="Content Link"
            value={form.contentLink}
            onChange={HandleFormData}
            className=" rounded-full p-2 text-black"
          />
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={form.title}
            onChange={HandleFormData}
            className="placholder:black rounded-full p-2 text-black"
          />
          <textarea
            name="description"
            placeholder="Description"
            value={form.description}
            onChange={HandleFormData}
            className=" rounded-lg p-2 text-black"
          />
          <input
            type="text"
            name="tags"
            placeholder="Tags (comma-separated)"
            value={form.tags}
            onChange={HandleFormData}
            className=" rounded-full p-2 text-black"
          />
          <textarea
            name="manualContent"
            placeholder="Manual Content"
            value={form.manualContent}
            onChange={HandleFormData}
            className=" rounded-lg p-2 text-black"
          />
          <button type="submit" className='px-2 py-4 text-xl bg-gray-500 rounded-3xl'>Create Brain</button>
        </form>
      </div>
    </div>
    </>
  );
}

export default Brain;