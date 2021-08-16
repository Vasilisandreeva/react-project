import Address from "../address/Address";
import Company from "../company/Company";
import {useEffect, useState} from "react";
import {getPostsOfUser} from "../../services/posts.service";
import Posts from "../posts/Posts";


export default function User({userItem}) {
  let {address, phone, username, website, company} = userItem;
  let [post, setPosts] = useState([]);

  useEffect(() => {
      getPostsOfUser(userItem.id).then(({data}) => setPosts([...data]));
  }, [userItem.id])

  return (
      <div>
        <h2>{userItem.id} - {userItem.name}</h2>
        <p>{username}</p>
        <p>{phone}</p>
        <p>{website}</p>
        <Address address={address}/>
        <Company company={company}/>
        <Posts items={post}/>
      </div>
  )
}