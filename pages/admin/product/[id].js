import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useReducer } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { Controller, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import Layout from '../../../components/Layout';
import { getError } from '../../../utils/error';

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true, error: '' };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, error: '' };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };

    case 'UPDATE_REQUEST':
      return { ...state, loadingUpdate: true, errorUpdate: '' };
    case 'UPDATE_SUCCESS':
      return { ...state, loadingUpdate: false, errorUpdate: '' };
    case 'UPDATE_FAIL':
      return { ...state, loadingUpdate: false, errorUpdate: action.payload };

    case 'UPLOAD_REQUEST':
      return { ...state, loadingUpload: true, errorUpload: '' };
    case 'UPLOAD_SUCCESS':
      return {
        ...state,
        loadingUpload: false,
        errorUpload: '',
      };
    case 'UPLOAD_FAIL':
      return { ...state, loadingUpload: false, errorUpload: action.payload };

    default:
      return state;
  }
}
export default function AdminProductEditScreen() {
  const { query } = useRouter();
  const productId = query.id;
  const [{ loading, error, loadingUpdate, loadingUpload }, dispatch] =
    useReducer(reducer, {
      loading: true,
      error: '',
    });

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({ type: 'FETCH_REQUEST' });
        const { data } = await axios.get(`/api/admin/products/${productId}`);
        dispatch({ type: 'FETCH_SUCCESS' });
        setValue('name', data.name);
        setValue('slug', data.slug);
        setValue('price', data.price);
        setValue('downloadFile', data.downloadFile);
        setValue('category', data.category);
        setValue('brand', data.brand);
        setValue('countInStock', data.countInStock);
        setValue('description', data.description);
        setValue('rating', data.rating);
        setValue('numReviews', data.numReviews);
        setValue('image1', data.image1);
        setValue('drImage', data.drImage);
        setValue('image3', data.image3);
        setValue('image4', data.image4);
        setValue('image5', data.image5);
        setValue('feature1', data.feature1);
        setValue('feature2', data.feature2);
        setValue('feature3', data.feature3);
        setValue('feature4', data.feature4);
        setValue('feature5', data.feature5);
      
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: getError(err) });
      }
    };

    fetchData();
  }, [productId, setValue]);

  const router = useRouter();

 const uploadHandler1 = async (e, imageField = 'image1') => {
     const url = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/upload`;
     try {
       dispatch({ type: 'UPLOAD_REQUEST' });
       const {
         data: { signature, timestamp },
       } = await axios('/api/admin/cloudinary-sign');
 
       const file = e.target.files[0];
       const formData = new FormData();
       formData.append('file', file);
       formData.append('signature', signature);
       formData.append('timestamp', timestamp);
       formData.append('api_key', process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY);
       const { data } = await axios.post(url, formData);
       dispatch({ type: 'UPLOAD_SUCCESS' });
       setValue(imageField, data.secure_url);
       toast.success('File uploaded successfully');
     } catch (err) {
       dispatch({ type: 'UPLOAD_FAIL', payload: getError(err) });
       toast.error(getError(err));
     }
   };
   const uploadHandler2 = async (e, imageField = 'drImage') => {
     const url = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/upload`;
     try {
       dispatch({ type: 'UPLOAD_REQUEST' });
       const {
         data: { signature, timestamp },
       } = await axios('/api/admin/cloudinary-sign');
 
       const file = e.target.files[0];
       const formData = new FormData();
       formData.append('file', file);
       formData.append('signature', signature);
       formData.append('timestamp', timestamp);
       formData.append('api_key', process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY);
       const { data } = await axios.post(url, formData);
       dispatch({ type: 'UPLOAD_SUCCESS' });
       setValue(imageField, data.secure_url);
       toast.success('File uploaded successfully');
     } catch (err) {
       dispatch({ type: 'UPLOAD_FAIL', payload: getError(err) });
       toast.error(getError(err));
     }
   };
   const uploadHandler3 = async (e, imageField = 'image3') => {
     const url = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/upload`;
     try {
       dispatch({ type: 'UPLOAD_REQUEST' });
       const {
         data: { signature, timestamp },
       } = await axios('/api/admin/cloudinary-sign');
 
       const file = e.target.files[0];
       const formData = new FormData();
       formData.append('file', file);
       formData.append('signature', signature);
       formData.append('timestamp', timestamp);
       formData.append('api_key', process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY);
       const { data } = await axios.post(url, formData);
       dispatch({ type: 'UPLOAD_SUCCESS' });
       setValue(imageField, data.secure_url);
       toast.success('File uploaded successfully');
     } catch (err) {
       dispatch({ type: 'UPLOAD_FAIL', payload: getError(err) });
       toast.error(getError(err));
     }
   };
   const uploadHandler4 = async (e, imageField = 'image4') => {
     const url = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/upload`;
     try {
       dispatch({ type: 'UPLOAD_REQUEST' });
       const {
         data: { signature, timestamp },
       } = await axios('/api/admin/cloudinary-sign');
 
       const file = e.target.files[0];
       const formData = new FormData();
       formData.append('file', file);
       formData.append('signature', signature);
       formData.append('timestamp', timestamp);
       formData.append('api_key', process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY);
       const { data } = await axios.post(url, formData);
       dispatch({ type: 'UPLOAD_SUCCESS' });
       setValue(imageField, data.secure_url);
       toast.success('File uploaded successfully');
     } catch (err) {
       dispatch({ type: 'UPLOAD_FAIL', payload: getError(err) });
       toast.error(getError(err));
     }
   };
   const uploadHandler5 = async (e, imageField = 'image5') => {
     const url = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/upload`;
     try {
       dispatch({ type: 'UPLOAD_REQUEST' });
       const {
         data: { signature, timestamp },
       } = await axios('/api/admin/cloudinary-sign');
 
       const file = e.target.files[0];
       const formData = new FormData();
       formData.append('file', file);
       formData.append('signature', signature);
       formData.append('timestamp', timestamp);
       formData.append('api_key', process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY);
       const { data } = await axios.post(url, formData);
       dispatch({ type: 'UPLOAD_SUCCESS' });
       setValue(imageField, data.secure_url);
       toast.success('File uploaded successfully');
     } catch (err) {
       dispatch({ type: 'UPLOAD_FAIL', payload: getError(err) });
       toast.error(getError(err));
     }
   };

  const submitHandler = async ({
    name,
    slug,
    price,
    category,
    downloadFile,
    brand,
    countInStock,
    description,
    numReviews,
    rating,
    image1,
    drImage,
    image3,
    image4,
    image5,
    feature1,
    feature2,
    feature3,
    feature4,
    feature5,
  }) => {
    try {
      dispatch({ type: 'UPDATE_REQUEST' });
      await axios.put(`/api/admin/products/${productId}`, {
        name,
        slug,
        price,
        downloadFile,
        category,
        brand,
        countInStock,
        description,
        numReviews,
        rating,
        image1,
        drImage,
        image3,
        image4,
        image5,
        feature1,
        feature2,
        feature3,
        feature4,
        feature5,
      });
      dispatch({ type: 'UPDATE_SUCCESS' });
      toast.success('Product updated successfully');
      router.push('/admin/products');
    } catch (err) {
      dispatch({ type: 'UPDATE_FAIL', payload: getError(err) });
      toast.error(getError(err));
    }
  };

  return (
    <Layout title={`Edit Product ${productId}`}>
      <div className="grid md:grid-cols-4 md:gap-5 py-2 mt-6 px-6  md:mt-32 md:px-32">
        <div>
          <ul>
            <li>
              <Link href="/admin/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link href="/admin/orders">Orders</Link>
            </li>
            <li>
              <Link href="/admin/products" className="font-bold">
                Products
              </Link>
            </li>
            <li>
              <Link href="/admin/users">Users</Link>
            </li>
          </ul>
        </div>
        <div className="md:col-span-3">
          {loading ? (
            <div>Loading...</div>
          ) : error ? (
            <div className="alert-error">{error}</div>
          ) : (
            <form
              className="mx-auto max-w-screen-md"
              onSubmit={handleSubmit(submitHandler)}
            >
              <h1 className="mb-4 text-xl">{`Edit Product ${productId}`}</h1>
              <div className="mb-4">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="w-full"
                  id="name"
                  autoFocus
                  {...register('name', {
                    required: 'Please enter name',
                  })}
                />
                {errors.name && (
                  <div className="text-red-500">{errors.name.message}</div>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="name">downloadFile</label>
                <input
                  type="text"
                  className="w-full"
                  id="downloadFile"
                  autoFocus
                  {...register('downloadFile', {
                    required: 'Please enter downloadFile',
                  })}
                />
                {errors.downloadFile && (
                  <div className="text-red-500">
                    {errors.downloadFile.message}
                  </div>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="slug">Slug</label>
                <input
                  type="text"
                  className="w-full"
                  id="slug"
                  {...register('slug', {
                    required: 'Please enter slug',
                  })}
                />
                {errors.slug && (
                  <div className="text-red-500">{errors.slug.message}</div>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="price">Price</label>
                <input
                  type="text"
                  className="w-full"
                  id="price"
                  {...register('price', {
                    required: 'Please enter price',
                  })}
                />
                {errors.price && (
                  <div className="text-red-500">{errors.price.message}</div>
                )}
              </div>
             
              <div className="mb-4">
                <label htmlFor="category">category</label>
                <input
                  type="text"
                  className="w-full"
                  id="category"
                  {...register('category', {
                    required: 'Please enter category',
                  })}
                />
                {errors.category && (
                  <div className="text-red-500">{errors.category.message}</div>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="brand">brand</label>
                <input
                  type="text"
                  className="w-full"
                  id="brand"
                  {...register('brand', {
                    required: 'Please enter brand',
                  })}
                />
                {errors.brand && (
                  <div className="text-red-500">{errors.brand.message}</div>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="countInStock">countInStock</label>
                <input
                  type="text"
                  className="w-full"
                  id="countInStock"
                  {...register('countInStock', {
                    required: 'Please enter countInStock',
                  })}
                />
                {errors.countInStock && (
                  <div className="text-red-500">
                    {errors.countInStock.message}
                  </div>
                )}
              </div>
              <div className="mb-4">
              <label htmlFor="description">description</label>

             <Controller
               name="description"
               control={control}
               defaultValue=" goes description"
               render={() => (
               <Editor
                 id="description"
                 apiKey='44whetabcqxl0wikmfztadtr6a3sxcwq44azp9ilxlwx9hmj'
                 textareaName="description"
                 cloudChannel="dev"
                 initialValue="write your content here"
                 onEditorChange={(newText)=>{setValue('description', newText)}}
                 init={{
                  plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount',
                  toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat',
                }}
                />

                 )}
             />

              {errors.description && (
                <div className="text-red-500">
                  {errors.description.message}
                </div>
              )}
            </div>

              <div className="mb-4">
                <label htmlFor="image1">image1</label>
                <input
                  type="text"
                  className="w-full"
                  id="image1"
                  {...register('image1', {
                    required: 'Please enter image1',
                  })}
                />
                {errors.image1 && (
                  <div className="text-red-500">{errors.image1.message}</div>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="imageFile1">Upload image</label>
                <input
                  type="file"
                  className="w-full"
                  id="imageFile1"
                  onChange={uploadHandler1}
                />

                {loadingUpload && <div>Uploading....</div>}
              </div>
              <div className="mb-4">
                <label htmlFor="drImage">drImage</label>
                <input
                  type="text"
                  className="w-full"
                  id="drImage"
                  {...register('drImage', {
                    required: 'Please enter drImage',
                  })}
                />
                {errors.drImage && (
                  <div className="text-red-500">{errors.drImage.message}</div>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="drImage">Upload image</label>
                <input
                  type="file"
                  className="w-full"
                  id="drImage"
                  onChange={uploadHandler2}
                />

                {loadingUpload && <div>Uploading....</div>}
              </div>
              <div className="mb-4">
                <label htmlFor="image3">image3</label>
                <input
                  type="text"
                  className="w-full"
                  id="image3"
                  {...register('image3', {
                    required: 'Please enter image3',
                  })}
                />
                {errors.image3 && (
                  <div className="text-red-500">{errors.image3.message}</div>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="imageFile3">Upload image</label>
                <input
                  type="file"
                  className="w-full"
                  id="imageFile3"
                  onChange={uploadHandler3}
                />

                {loadingUpload && <div>Uploading....</div>}
              </div>
              <div className="mb-4">
                <label htmlFor="image4">image4</label>
                <input
                  type="text"
                  className="w-full"
                  id="image4"
                  {...register('image4', {
                    required: 'Please enter image4',
                  })}
                />
                {errors.image4 && (
                  <div className="text-red-500">{errors.image4.message}</div>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="imageFile4">Upload image</label>
                <input
                  type="file"
                  className="w-full"
                  id="imageFile4"
                  onChange={uploadHandler4}
                />

                {loadingUpload && <div>Uploading....</div>}
              </div>
              <div className="mb-4">
                <label htmlFor="image5">image5</label>
                <input
                  type="text"
                  className="w-full"
                  id="image5"
                  {...register('image5', {
                    required: 'Please enter image5',
                  })}
                />
                {errors.image5 && (
                  <div className="text-red-500">{errors.image5.message}</div>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="imageFile5">Upload image</label>
                <input
                  type="file"
                  className="w-full"
                  id="imageFile5"
                  onChange={uploadHandler5}
                />

                {loadingUpload && <div>Uploading....</div>}
              </div>




              <div className="mb-4">
                <label htmlFor="feature1">feature1</label>
                <input
                  type="text"
                  className="w-full"
                  id="feature1"
                  {...register('feature1', {
                    required: 'Please enter feature1',
                  })}
                />
                {errors.feature1 && (
                  <div className="text-red-500">{errors.feature1.message}</div>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="feature2">feature2</label>
                <input
                  type="text"
                  className="w-full"
                  id="feature2"
                  {...register('feature2', {
                    required: 'Please enter feature2',
                  })}
                />
                {errors.feature2 && (
                  <div className="text-red-500">{errors.feature2.message}</div>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="feature3">feature3</label>
                <input
                  type="text"
                  className="w-full"
                  id="feature3"
                  {...register('feature3', {
                    required: 'Please enter feature3',
                  })}
                />
                {errors.feature3 && (
                  <div className="text-red-500">{errors.feature3.message}</div>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="feature4">feature4</label>
                <input
                  type="text"
                  className="w-full"
                  id="feature4"
                  {...register('feature4', {
                    required: 'Please enter feature4',
                  })}
                />
                {errors.feature4 && (
                  <div className="text-red-500">{errors.feature4.message}</div>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="feature5">feature5</label>
                <input
                  type="text"
                  className="w-full"
                  id="feature5"
                  {...register('feature5', {
                    required: 'Please enter feature5',
                  })}
                />
                {errors.feature5 && (
                  <div className="text-red-500">{errors.feature5.message}</div>
                )}
              </div>

            
              <div className="mb-4">
                <button disabled={loadingUpdate} className="primary-button">
                  {loadingUpdate ? 'Loading' : 'Update'}
                </button>
              </div>
              <div className="mb-4">
                <Link href={`/admin/products`}>Back</Link>
              </div>
            </form>
          )}
        </div>
      </div>
    </Layout>
  );
}

AdminProductEditScreen.auth = { adminOnly: true };
