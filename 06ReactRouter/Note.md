1. Anchor tag or <a> tag is not used in React as it refreshes the whole page which is not the concept of react, that's why Link tag is used in react which is imported from react-router-dom.

 
2. ## Loader

```javascript

loader={githubUserInfoLoader}

```
Loader is aproperty in react-router-dom which is used  to provide data to the route element before it renders.

3. To make the loader workable we have to fetch the data from api like this

```javascript
export const githubUserInfoLoader = async () =>{
    const response = await fetch('https://api.github.com/users/snehasishdasz')
    return response.json();
}
```
and then pass this function inside the loader function like this 
```javascript

loader={githubUserInfoLoader}

```
and to make all of this possible we use a hooks for this the name of the hook is 

```javascript

const data =  useLoaderData()

```

3
## useParams()
this hook is basically use to help  for passing dynamic value in react routing

```javascript
<Route path='user/:userid' element={<User/>}/>

const {userid} = useParams()

```

