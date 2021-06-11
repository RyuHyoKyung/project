import React from 'react'
import { Link } from 'react-router-dom'

export const UserMenu = () => (
    <nav>
        <ol>
            <li><Link to='/signupform'>회원가입</Link></li>
            <li><Link to='/loginform'>로그인</Link></li>
            <li><Link to='/userdetail'>회원정보상세</Link></li>
            <li><Link to='/usermodify'>회원정보수정</Link></li>
            <li><Link to='/userremove'>회원정보삭제</Link></li>
        </ol>
    </nav>

)
export const ItemMenu = () => (
    <nav>
        <ol>
            <li><Link to='/itemlist'>아이템 목록</Link></li>
            <li><Link to='/itemregister'>아이템 등록</Link></li>
            <li><Link to='/itemdetaill'>아이템 상세</Link></li>
            <li><Link to='/itemremove'>아이템 삭제</Link></li>
        </ol>

    </nav>
)


export const ArticleMenu = () => (
    <nav>
        <ol>
            <li><Link to='/articlelist'>게시글 목록</Link></li>
            <li><Link to='/articlewrite'>게시글 쓰기</Link></li>
            <li><Link to='/articleread'>게시글 읽기</Link></li>
            <li><Link to='/articleremove'>회원정보삭제</Link></li>
        </ol>
    </nav>

)