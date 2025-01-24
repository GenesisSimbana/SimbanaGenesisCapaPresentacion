const EnrolledUsers = ({ courseId }) => {
    const [enrolledUsers, setEnrolledUsers] = useState([]);
  
    useEffect(() => {
      axios.get(`API_URL/courses/${courseId}/users`)
        .then(response => {
          setEnrolledUsers(response.data);
        })
        .catch(error => {
          console.error('Hubo un error al obtener los usuarios matriculados', error);
        });
    }, [courseId]);
  
    return (
      <div>
        <h3>Usuarios Matriculados</h3>
        <ul>
          {enrolledUsers.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    );

    const handleEnroll = (userId) => {
        axios.post(`API_URL/courses/${courseId}/enroll`, { userId })
          .then(response => {
            setEnrolledUsers([...enrolledUsers, response.data]);
          })
          .catch(error => {
            console.error('Hubo un error al matricular al usuario', error);
          });
      };

      const handleUnenroll = (userId) => {
        axios.delete(`API_URL/courses/${courseId}/unenroll/${userId}`)
          .then(() => {
            setEnrolledUsers(enrolledUsers.filter(user => user.id !== userId));
          })
          .catch(error => {
            console.error('Hubo un error al desmatricular al usuario', error);
          });
      };

      
  };
  