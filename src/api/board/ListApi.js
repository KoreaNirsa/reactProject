import axiosInstance from "../../config/axios";

export const getList = async({currentPage, category, text}) => {
    try {
        const response = await axiosInstance.get('/api/board/list', {
            params: {
                category: category,
                text: text,
                currentPage: currentPage
            },
            withCredentials: true
        });
        return response.data;
    } catch(err) {
        console.log('게시글 불러오기 실패 : ' + err);
        throw err;
    }
}