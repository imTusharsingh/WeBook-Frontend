import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Skeleton from '@mui/material/Skeleton';

const PostSkeleton = () => {

    return (
        <Card sx={{
            margin: "10px 0px"
        }} >
            <CardHeader
                avatar={
                    <Skeleton animation="wave" variant="circular" width={40} height={40} />
                }
                action={
                    null
                }
                title={
                    <Skeleton
                        animation="wave"
                        height={10}
                        width="100%"
                        style={{ marginBottom: 6 }}
                    />
                }
                subheader={
                    <Skeleton animation="wave" height={10} width="40%" />
                }
            />
            <Skeleton sx={{ height: 450 }} animation="wave" variant="rectangular" />
            <CardContent>
                <>
                    <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
                    <Skeleton animation="wave" height={10} width="100%" />
                </>
            </CardContent>
        </Card>
    );
}

export default PostSkeleton;
