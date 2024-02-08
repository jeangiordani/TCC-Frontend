import React from "react";

interface CommentsProps {
    questionId: string;
}
const Comments: React.FC<CommentsProps> = (props) => {
    const { questionId } = props;

    return <>{questionId}</>;
};

export default Comments;
