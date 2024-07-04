import { UserDetailContext } from '../../../_context/UserDetailContext';
import GlobalApi from '../../../_utils/GlobalApi';
import { Button } from '../../../../components/ui/button';
import { useToast } from '../../../../components/ui/use-toast';
import { useUser } from '@clerk/nextjs';
import { Image, Send, Video } from 'lucide-react';
import React, { useContext, useState } from 'react';

function WritePost({ getAllPost }) {
    const { user } = useUser();
    const [userInputPost, setUserInputPost] = useState();
    const { toast } = useToast();
    const { userDetail, setUserDetail } = useContext(UserDetailContext);

    const onCreatePost = () => {
        if (!userDetail) {
            toast({
                title: "Access Denied",
                description: "Kindly request the admin vigneshrintu@gmail.com to allow you to post and comment on this platform via email. We do not allow everyone to post and comment as we have experienced people posting inappropriate content on this platform.",
                variant: "error",
            });
            return;
        }

        const data = {
            postText: userInputPost,
            createdAt: Date.now().toString(),
            createdBy: userDetail._id,
        };

        GlobalApi.createPost(data).then(resp => {
            console.log(resp);
            setUserInputPost('');
            if (resp) {
                getAllPost();
                toast({
                    title: "Awesome!",
                    description: "Your post was published successfully.",
                    variant: "success",
                });
            }
        }, (error) => {
            toast({
                title: "Oops!",
                description: "Some server-side error occurred.",
                variant: "destructive",
            });
        });
    }

    return (
        <div>
            <h2 className='text-[30px] font-medium text-gray-600'>Hello, {user.fullName}</h2>
            <h2 className='text-gray-400'>We only allow approved users to post on this site. To share important information, please contact the developer. This policy helps us prevent inappropriate and abusive content. We will notify users when posting is open to everyone for specific events.</h2>
            <div className='p-5 border rounded-lg mt-5 bg-slate-100'>
                <h2>Share Job Updates, Tech News, Articles & ofcourse Memes</h2>
                <div className='p-4 bg-white rounded-lg mt-2'>
                    <textarea 
                        placeholder="What's New"
                        className='outline-none w-full'
                        value={userInputPost}
                        onChange={(e) => setUserInputPost(e.target.value)}
                    />
                </div>
                <div className='mt-2 flex justify-between'>
                    {/* <div className='flex gap-5'>
                        <h2 className='flex gap-2 items-center cursor-pointer hover:bg-slate-200 p-2 rounded-lg'>
                            <Image className='h-5 w-5' /> Image
                        </h2>
                        <h2 className='flex gap-2 items-center cursor-pointer hover:bg-slate-200 p-2 rounded-lg'>
                            <Video className='h-5 w-5' /> Video
                        </h2>
                    </div> */}
                    <Button 
                        className="bg-blue-500 rounded-xl gap-2 hover:bg-blue-700"
                        disabled={!userInputPost?.length}
                        onClick={onCreatePost}
                    >
                        <Send className='h-4 w-4' /> Publish
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default WritePost;
