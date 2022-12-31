import PropTypes from 'prop-types'
import RepoItem from './RepoItem'

function RepoList({repos}) {
  return (
    <>
       <div className="rounded-lg shadow-lg card bg-slate-600">
        <div className="card-body">
            <h2 className="text-3xl my-4 font-bold text-white card-title">
                Latest Respositories
            </h2>
            {repos.map((repo,index)=>(
              
               <RepoItem key={index} repo={repo}/>
              
            ))}
        </div>
       </div>
    </>
  )
}

RepoList.propTypes = {
    repos : PropTypes.array.isRequired,
}

export default RepoList
