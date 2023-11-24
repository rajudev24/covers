import Image from "next/image"
import Link from "next/link"
import { Avatar, Button, Card, Space } from 'antd';
import { useEffect, useState } from "react";
import { UserOutlined } from '@ant-design/icons';
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from 'react-icons/bs';

export default function TopArtist({ artists }) {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        if (artists.data.length > 0) {
            setLoading(false);
        }
    }, [artists.data]);
    // console.log(artists.data)
    return (
        <div className=" my-4">
            <div className="flex justify-between items-center">
                <h1 className="text-xl font-bold ml-4 "> Top Artists</h1>
                <Space className="mr-4 p-1 cursor-pointer">
                    <BsFillArrowLeftCircleFill size={23} className="hover:scale-105 transition duration-700 ease-in-out" />
                    <BsFillArrowRightCircleFill size={23} className="hover:scale-105 transition duration-500 ease-in-out" />
                </Space>
            </div>

            <div className="grid md:grid-cols-3">
                {
                    artists && Array.from({ length: 6 }).map((_, index) => {
                        const artist = artists.data[index];
                        return (
                            <div key={index} className="shadow-sm border p-2 m-2 rounded-md">
                                <Link href={artist ? `/artists/${artist.artist_id}` : '#'}>
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center">
                                            {artist?.small_img ? (
                                                <Image
                                                    src={artist.small_img}
                                                    width={50}
                                                    height={50}
                                                    alt="Picture of the Artist"
                                                    loading="lazy"
                                                    blurDataURL={artist.small_img}
                                                    className="rounded-full hover:scale-105 transition duration-700 ease-in-out"
                                                />
                                            ) : (
                                                <div>
                                                    <Avatar size={52} icon={<UserOutlined />} />
                                                </div>
                                            )}
                                            <div className="ml-2">
                                                <h1 className="font-semibold"> Sudeep Sharma </h1>
                                                <span className="DM-Sans">250k Followers</span>
                                            </div>
                                        </div>
                                        <Button className="bg-indigo-500 text-white">+Follow</Button>

                                    </div>
                                </Link>

                            </div>
                        );
                    })
                }
            </div>

        </div>
    )
}
