import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Layout from './components/Layout';
import NotFound from './pages/NotFound';
import BuggyComponent from './components/BuggyComponent';
import ErrorBoundaryPage from './pages/ErrorBoundaryPage';
import GlobalErrorCatcher from './hooks/GlobalErrorCatcher';
import Loader from './components/Loader';

const Home = lazy(() => import('./pages/Home'));
// const About = lazy(() => import('./pages/About'));
const LearningFormatsSection = lazy(() => import('./components/LearningFormatsSection'));
const WorkInfoSection = lazy(() => import('./components/WorkInfoSection'));
const Options = lazy(() => import('./pages/Options'));

function App() {
  return (
    <Suspense fallback={<Loader/>}>
       <GlobalErrorCatcher /> 
      <Routes>
        <Route path="/" element={<Layout />} > 
          <Route index element={<Home />} />
          <Route path="about" element={<LearningFormatsSection />} />
          <Route path="WorkInfoSection" element={<WorkInfoSection />} />
          <Route path="options" element={<Options />} />
          <Route path="error" element={<ErrorBoundaryPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
