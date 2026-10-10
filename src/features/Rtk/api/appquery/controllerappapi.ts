import { rootApi } from '@/features/Rtk/api/rootapi';

export interface GetDataArgs {
  endpoint: string;
  search?: string;
  pageSize?: number;
  where?: Record<string, any>;
  id?: string | number;
  limit?: number;
  providedTags?: ('Users' | 'Products' | 'Orders')[];

}

export interface AdminActionArgs {
  id?: string | number;
  endpoint: string;
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  params?: Record<string, any>;
  body?: any;
  invalidatedTags?: ('Users' | 'Products' | 'Orders')[];
}

const controllerAppApi = rootApi.injectEndpoints({
  endpoints: (builder) => ({
    getData: builder.query<any, GetDataArgs>({
      query: ({
        endpoint,
        search,
        pageSize,
        where,
        id,
        limit,
      }) => ({
        url: id ? `${endpoint}/${id}` : endpoint,
        method: 'GET',
        params: {
          search,
          page: pageSize,
          limit,
          ...where,
        },
      }),

      providesTags: (_result, _error, args) =>
        args?.providedTags ?? [],
    }),

    adminActions: builder.mutation<any, AdminActionArgs>({
      query: ({
        id,
        endpoint,
        method,
        params,
        body,
      }) => ({
        url: id ? `${endpoint}/${id}` : endpoint,
        method,
        params,
        body,
      }),

      invalidatesTags: (_result, _error, args) =>
        args?.invalidatedTags ?? [],
    }),
  }),

  overrideExisting: false,
});

 
export const {
  useGetDataQuery,
  useLazyGetDataQuery,
  useAdminActionsMutation,
} = controllerAppApi;