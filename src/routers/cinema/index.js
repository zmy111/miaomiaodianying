export default {
    path: '/Cinema',
    component : ()=>import('@/views/Cinema'),
    children:[
        {
            path:'allCity',
            component:()=>import('@/components/AllCity')
        
        },
        {
            path:"/cinema",
            redirect:"/cinema/allCity"
        }

    ]
}