import axios from 'axios';
import { useEffect, useState } from 'react'
import { Header, List } from 'semantic-ui-react';

function App() {
    const [activities, setactivities] = useState([]);

    useEffect(() => {
        axios.get('https://localhost:7206/api/Activities')
            .then(response => {
                setactivities(response.data)
            })
    },[])
    
  return (
    <div>
      
          <Header as='h2' icon='users' content='Reactivities'/>
          <List>
              {activities.map((activity: any) => (
                  <List.Item key={activity.id}>
                      {activity.title}
                  </List.Item>
              ))}
          </List>
    </div>
  )
}

export default App
