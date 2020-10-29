import { IPost } from '../../../models/post';
import { getPosts } from '../../requests/posts';
// import { Company, Project } from '../../../types/models';
// import { getCompanies } from '../../requests/companies/get';
import { useFetcher } from '../components/useFetcher';
// import { getCompanyProjects, getProjectHierarchy, getProjects, getProjectStatistics } from '../../requests/projects/get';
// import { EmployeeContactsDTO, ProjectHierarchyDTO, ProjectStatisticsDTO } from '../../../types/models/tdo';
// import { getEmployeeContacts } from '../../requests/peoples/get';

// export const useCompanies = () => useFetcher<Company[]>(getCompanies());
// export const useCompanyProjects = (company: string) => useFetcher<Project[]>(getCompanyProjects(company));
// export const usePeopleContacs = () => useFetcher<EmployeeContactsDTO[]>(getEmployeeContacts());
// export const useProjectHierarchy = (projectID: number) => useFetcher<ProjectHierarchyDTO[]>(getProjectHierarchy(projectID));
// export const useProjects = () => useFetcher<Project[]>(getProjects());
// export const useProjectStatistics = (projectID: number) => useFetcher<ProjectStatisticsDTO[]>(getProjectStatistics(projectID))

export const usePosts = (id: string) => useFetcher<IPost[]>(getPosts(id));