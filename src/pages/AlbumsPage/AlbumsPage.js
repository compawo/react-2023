import React, { useEffect, useState } from 'react';
import {albumsService} from "../../services";
import {Albums} from "../../components";

export const AlbumsPage = () => {
    const [albums, setAlbums] = useState([]);
    useEffect(() => {
        albumsService.getAll().then(({data}) => setAlbums([...data]))
    }, [])
    return (
        <div style={{ width: '100%', margin: '0 auto' }}>
            <h1>Albums</h1>
            <Albums albums={albums} />
        </div>
    );
};