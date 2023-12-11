
function Page({navigationPage, changePage}){
  return(
    <>
    <ul>
      <li className={navigationPage.path==='home'?"active":""} onClick={()=>changePage({
          path: 'home',
          data: 'HOME',
      })}>home</li>
      <li className={navigationPage.path==='blogs'?"active":""} onClick={()=>changePage({
          path: 'blogs',
          data: 'BLOGS ARTICLES',
      })}>blogs</li>
      <li className={navigationPage.path==='contacts'?"active":""} onClick={()=>changePage({
          path: 'contacts',
          data: 'CONTACTS ME',
      })}>contacts</li>
    </ul>
    <h1>{navigationPage.data}</h1>
  </>
  
  );
}
export default Page;