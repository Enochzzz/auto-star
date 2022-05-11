import { POST_STAR_URL, OK_STATUS } from './constants';
import Vaildate from './vaildate';
console.log(process.argv, 111)
console.log(process.env, 222)
// const { Octokit } = require("@octokit/core");

// const octokit = initOctokit(this.context);

// /**
//  * 在有token的情况下 初始化octokit
//  * @param context
//  * @returns
//  */
//  export function initOctokit(context) {
//   if (context.globalState.get('git_token_study_plan')) {
//     return new Octokit({ auth: context.globalState.get('git_token_study_plan') });
//   }
//   return null;
// }

// /**
//  * 提交
//  * @param content
//  * @returns
//  */
// export async function submit(content) {
//   const infoList = handleRepoList(content.repoList);
//   infoList.forEach(async(i) => {
//     await handleStarRepo(i);
//   });
//   for (let i = 0; i < infoList.length; i++) {
//     await handleStarRepo(infoList[i]);
//   }
// }

// export function handleRepoList(repoList) {
//   const infoList = repoList.map((i) => {
//     const { owner, repo } = getRepoInfo(i['链接']);
//     return { owner, repo };
//   });
//   return infoList;
// }

// function getRepoInfo(url) {
//   const result = url.match(/.*\/(\S*)\/(\S*)/);
//   return {
//     owner: result[1] || '',
//     repo: result[2] || ''
//   };
// }

// async function handleStarRepo(info) {
//   const { owner, repo } = info;
//   try {
//     let res = await octokit.request(POST_STAR_URL, {
//       owner,
//       repo
//     });
//     const validate = new Vaildate;
//     validate.addRule({
//       rule: res.status === OK_STATUS,
//       handle: () => {
//         postMes('info_webview', { text: '${owner}的repo star失败', type: 'err' });
//       }
//     });
//     if(!validate.check()) {
//       return false;
//     }
//     postMes('success_webview', `${owner}的repo star成功！`);
//     return true;
//   } catch (error) {
//     postMes('info_webview', { text: `${error.message}, ${owner}的repo star失败`, type: 'err' });
//     return false;
//   }
// }
