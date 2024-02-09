import { useState } from 'react';
import { useSelector } from 'react-redux';

export default function CreateListing() {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const { currentUser } = useSelector((state) => state.user);
    const [formData, setFormData] = useState({
        name: '',
        originalUrl: '',
        shortUrl:''

    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const shortUrl = await createShortLink(formData.originalUrl);
            const res = await fetch('/api/listing/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ...formData,
                shortUrl: shortUrl,
                userRef: currentUser._id
              }),
            });
            if (!res.ok) {
                throw new Error('Failed to create listing');
            }
            setFormData({
                ...formData,
                shortUrl: shortUrl,
                userRef: currentUser._id
            });
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(formData.originalUrl);
        window.open(formData.originalUrl, '_blank');
    }

    return (
        <main className='p-3 max-w-4xl mx-auto'>
            <h1 className='text-3xl font-semibold text-center my-7'>Create Short Link</h1>
            <form onSubmit={handleSubmit}>
                <div className='flex flex-col gap-4 flex-1'>
                    <input type="txt" placeholder='Name' className='border p-3 rounded-lg' id='name' maxLength='62' minLength='10' required onChange={handleChange} value={formData.name}/>
                    <input type="url" placeholder='Enter the Link' className='border p-3 rounded-lg' id='originalUrl' maxLength='62' minLength='10' required onChange={handleChange} value={formData.originalUrl}/>
                    <button type="submit" style={{width: '100%'}} className='p-3 bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>Create Short Link</button>
                </div>
            </form>
            <p className='border p-3 rounded-lg' id='shortUrl' maxLength='62' minLength='10' required onChange={handleChange} value={formData.name}>{formData.shortUrl}</p>
            <button onClick={handleCopy} style={{width: '100%'}} className='p-3 bg-red-700 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>Copy</button>
        </main>
    )
}

async function createShortLink(url) {
    return `https://short.link/${Math.random().toString(36).substring(2)}`;
}
