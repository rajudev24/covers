import Link from 'next/link'
import { useEffect, useState } from 'react';
import { Card, Space } from 'antd';
import Image from 'next/image';
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { GrFormView } from 'react-icons/gr';

export default function AllVideos({ AllVideos }) {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch('AllVideos.json')
            .then((response) => response.json())
            .then((data) => setVideos(data))
            .catch((error) => console.error(error));
    }, []);

    return (
        <div className=" my-4">
            <div className="flex justify-between items-center">
                <h1 className="text-xl font-bold ml-4 "> All Videos</h1>
                <Space className="mr-4 p-1 cursor-pointer">
                    <BsFillArrowLeftCircleFill size={23} />
                    <BsFillArrowRightCircleFill size={23} />
                </Space>
            </div>
            <div className="grid md:grid-cols-3  justify-items-center gap-4 m-2">
                {
                    videos && videos.map((video, index) => {

                        return (
                            <div key={index} >
                                <Card
                                    className='relative'
                                    cover={
                                        <Image
                                            alt="example"
                                            src={video.large_img}
                                            width={350}
                                            height={250}
                                            blurDataURL={video.large_img}
                                            loading='lazy'
                                        />
                                    }
                                >
                                    <div className='flex items-center absolute top-2 bg-slate-300 rounded-md p-1 pr-4 left-2'>
                                        <GrFormView size={24} className='-pl-2' />
                                        <span>{video.youtube_view_count
                                        } </span>
                                    </div>
                                    <h5 className='-ml-4 -mt-4'>{video.categories.category_name} </h5>
                                    <h4 className='text-xs -ml-4 py-1 font-semibold'> {video.title}</h4>
                                    <div className='-ml-5 -mb-4'>
                                        {
                                            video.youtube_tags && video.youtube_tags.map((tag, index) => (
                                                <button className='border-2 m-1 p-1 rounded-md text-xs ' key={index}> {tag} </button>
                                            ))

                                        }
                                    </div>



                                </Card>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    )
}
