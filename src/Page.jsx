
function Page({navigationPage, changePage}){
  return(<>
    <ul>
      <li onClick={()=>changePage({
          path: 'home',
          data: 'HOME',
      })}>home</li>
      <li onClick={()=>changePage({
          path: 'blogs',
          data: 'BLOGS ARTICLES',
      })}>blogs</li>
      <li onClick={()=>changePage({
          path: 'contacts',
          data: 'CONTACTS ME',
      })}>contacts</li>
    </ul>
    <h1>{navigationPage.data}</h1>
  </>
  
  );
}
export default Page;