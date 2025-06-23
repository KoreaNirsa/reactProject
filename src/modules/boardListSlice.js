import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getList } from '../api/board/ListApi';

// 비동기 액션 생성 
export const fetchBoardList = createAsyncThunk(
    "getBoardList", // 액션 타입 이름
    async(params, {rejectWithValue}) => {  
        try{
            const response = await getList(params);
            console.log(response);
            return response; // 성공 시 payload로 반환
        }catch(err) {
            return rejectWithValue(err.response.data); // 실패 시 에러 응답을 payload로 반환
        }
    }
)

// 초기 상태 정의
const initialState  = {
    posts: [],
    pi: {},
    loading: false, 
    err: null
}

// 상태 + 리듀서 정의
const boardListSlice = createSlice({
    name: 'boardList', // slice 이름
    initialState , // 초기 상태
    reducers: {}, // 리듀서
    extraReducers: (builder) => { // 비동기 액션을 상태별로 처리
        builder
            .addCase(fetchBoardList.pending, (state) => { // fetchBoardList 액션이 요청중 상태일 때
                state.loading = true;
                state.err = null;
            })
            .addCase(fetchBoardList.fulfilled, (state, action) => { // featchBoardList 액션이 성공했을 때
                state.posts = action.payload.posts; 
                state.pi = action.payload.pi;
            })
            .addCase(fetchBoardList.rejected, (state, action) => { // fetchBoardList 액션이 실패했을 때
                state.err = action.payload;
            }) 
    }
})

export default boardListSlice.reducer;