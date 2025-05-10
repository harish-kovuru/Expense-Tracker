
import React from 'react'
import Logo from './shared/Logo'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Avatar, AvatarImage } from './ui/avatar';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import axios from 'axios';
import { toast } from 'sonner';


const Navbar = () => {
    const user  = true;
    const navigate = useNavigate();
   
    const logoutHandler = async () => {
        try {
            //network call
            const res = await axios.get("http://localhost:8000/api/v1/user/logout");
            if (res.data.success) {
               
                navigate("/login");
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
    }
    console.log(user);
    
    return (
        <div className='border-b border-grey-200 mt-1'>
            <div className='flex item-center justify-between max-w-7xl mx-auto h-16'>
                <Logo />
                { 
                
                    user ? (
                        <Popover>
                            <PopoverTrigger>
                                <Avatar>
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                </Avatar>
                            </PopoverTrigger>
                            <PopoverContent>
                                <p>{user.fullname}</p>
                                <Button variant="link" onClick={logoutHandler}>Logout</Button>
                            </PopoverContent>
                        </Popover>

                    ) : (
                        <div className='flex item-center gap-2'>
                            <Link to="/login"><Button variant="outline">Login</Button></Link>
                            <Link to="/signup"><Button variant="outline">signup</Button></Link>
                        </div>
                    )
                }
            </div>

        </div>
    )
}

export default Navbar