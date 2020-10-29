import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { PostCard } from '../components/PostCard';
import { usePosts } from '../services/hooks/partials';
import { uploadPosts } from '../store/partials/posts/action';
import { ReduxStateType } from '../store/types/state';
import { PostImageViewer } from './ImageViewer';

export function DefaultPage() {
    const dispatch = useDispatch();
    const postsRedux = useSelector((state: ReduxStateType) => state.posts);

    const getPosts = usePosts("cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0");
    const _renderData = Object.values(postsRedux);

    useEffect(() => {
        switch (getPosts.status) {
            case "loaded": {
                dispatch(uploadPosts(getPosts.payload));
                break;
            }
            default:
                break;
        }
    }, [getPosts.status, dispatch, uploadPosts]);

    return (
        <View>
            <ScrollView>
                {
                    _renderData && _renderData.length > 0 ?
                        _renderData.map((item, index) => {
                            return (
                                <PostCard
                                    key={index}
                                    post={item}
                                />

                            )
                        }) :
                        <Text>Loading...</Text>
                }
            </ScrollView>
            <PostImageViewer />
        </View>
    )
}