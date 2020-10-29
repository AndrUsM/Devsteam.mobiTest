import React from 'react';
import { Card, CardTitle, CardAction, CardButton, CardImage } from 'react-native-material-cards'
import { IPost } from '../../models/post';
import { useDispatch } from 'react-redux';
import { uploadImage } from '../../store/partials/image_viewer_content/action';
import { ImageViewerDTO } from '../../models/dto/imageViewerDTO';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { setImageViewerStatus } from '../../store/partials/image_viewer_status/action';
import { Text, View } from 'react-native';
import { styles } from './styles';

export function PostCard(props: {
    post: IPost
}) {
    const { post } = props;
    const dispatch = useDispatch();

    const {
        urls, alt_description,
        description, color, user
    } = post;

    const { first_name, last_name } = user;

    function generateName() {
        if (first_name && last_name) {
            return [
                first_name,
                last_name
            ].join(" ");
        } else return "";
    }

    function viewImage() {
        const dispatchObject: ImageViewerDTO = {
            source: {
                uri: post.urls.small
            },
            title: post.alt_description,
            height: post.height,
            width: post.width
        }
        dispatch(uploadImage(dispatchObject));
        dispatch(setImageViewerStatus({
            status: true
        }))
    }

    return (
        <Card style={styles.card}>
            <TouchableOpacity
                style={styles.cardImageWrapper}
                onPress={
                    () => viewImage()
                }
            >
                <CardImage
                    style={styles.cardImage}
                    title={description}
                    source={{ uri: urls.small }}
                />
                <CardTitle
                    onPress={
                        () => viewImage()
                    }
                    titleStyle={{
                        color: color
                    }}
                    title={alt_description}
                    subtitle={
                        description ? description : ""
                    }
                />
            </TouchableOpacity>
            <View>
                <CardAction
                    style={styles.cardAction}
                    separator={true}
                    inColumn={false}
                >
                    <CardButton
                        titleStyle={{ color: color }}
                        onPress={() => {
                            // TODO
                        }}
                        title={`${post.likes} Likes`}
                    />
                    <Text>
                        {generateName()}
                    </Text>
                </CardAction>
            </View>
        </Card>
    )
}