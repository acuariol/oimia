# 基于React Native开发的Android端类社交App  
#### RN版本0.63.0-rc.0。
#### 集成NativeBase组件库。
#### 使用react-redux管理状态
#### 使用react-navigation导航页面

<!-- ![首页](http://acuario.cn/screenshot/rn_homePage.png) -->

## 项目启动
#### 1. 进入项目根目录安装依赖
```
yarn install
```
#### 2. 开启安卓虚拟机Genymotion或Android Studio自带的(建议使用Genymotion)

#### 3.使用Android Studio打开根目录android/app目录，运行一次，编译过程中不报错，提示安装成功即可（可选）

#### 4. 启动服务（根目录运行）
```
yarn react-native start
```

#### 5. 安装app到虚拟机（根目录运行）

```
yarn android
```

注意：如报错可尝试将第4步和第五步可互换顺序运行，如还保存请先用Android Studio启动一次。启动方法：使用Android Studio打开项目目录中的 android/app目录，点击运行
