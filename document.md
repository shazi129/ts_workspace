# TypeScript学习笔记

[TOC]

## 环境安装
### 安装Typescripte
1. 安装nodejs
2. 安装typescript: `npm install -g typescript`
3. 初始化Workspace: `npm init`
4. 初始化环境: `tsc -init`

### 初始化编译环境
1. 创建`Src`目录，用来存放ts代码
2. 创建`Out`目录，用来保存js代码
3. 编辑tsconfig.json
   ```
    "outDir": "./Out", 
    "rootDir": "./Src",  
    "sourceMap": true, 
    "allowJs": true,
   ```
4. 创建测试文件`Src/Main.ts`
5. VSCode `Run->AddConfiguration`添加一个运行配置
6. 修改`launch.json`, 指定调试文件 `"program": "${workspaceFolder}\\Src\\Main.ts",`

### 一些错误处理
1. PS无权限
```
tsc : 无法加载文件 C:\Users\appy\AppData\Roaming\npm\tsc.ps1，因为在此系统上禁止运行脚本。有关详细信息，请参阅 https:/go.microsoft.com
/fwlink/?LinkID=135170 中的 about_Execution_Policies。
所在位置 行:1 字符: 1
+ tsc -p d:\Workspace\ts_workspace\tsconfig.json
+ ~~~
    + CategoryInfo          : SecurityError: (:) []，PSSecurityException
    + FullyQualifiedErrorId : UnauthorizedAccess
```
`Wind+X` -> 管理员打开PS -> 运行`set-executionpolicy RemoteSigned`
