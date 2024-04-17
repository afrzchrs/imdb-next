import MenuItem from './MenuItem';
import { AiFillHome } from 'react-icons/ai';
import {BsFillIntoCircleFill} from 'react-icons/bs';

export default function Header(){
    return (
        <div>
            <div className="">
                <MenuItem title="home" address="/" Icon={AiFillHome} />
                <MenuItem title="about" address="/about" Icon={BsFillIntoCircleFill} />
            </div>
            <div className="">

            </div>
        </div>
    )
}