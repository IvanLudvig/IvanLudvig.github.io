---
layout: post
title:  "Integrating libgdx into an android project"
date:   2019-06-23 20:44:02 +0300
categories: blog
---

This demo project on [GitHub](https://github.com/IvanLudvig/android-libgdx-demo).

## How to add libgdx to a native Android project
I suggested generating a libgdx project, that way it's easier. 

So, you have an android project.

Update your app's `build.gradle` file: 

1. Add the properties after the line `apply plugin: 'com.android.application'` (alternatively, you can copy them from your libgdx project):

```
ext {
    appName = "AndroidLibgdx"
    gdxVersion = '1.9.9'
    roboVMVersion = '2.3.6'
    box2DLightsVersion = '1.4'
    ashleyVersion = '1.7.0'
    aiVersion = '1.8.0'
}

```
2. Inside `android` paste this code:

```
android{
	//other code
    sourceSets {
        main {
            jniLibs.srcDirs = ['libs']
        }
    }
}
```

3. Add this line before `dependecies`:

```
configurations { natives }
```
4. Add libgdx dependencies:

```
dependencies {
    //Other dependencies you have

    implementation "com.badlogicgames.gdx:gdx-backend-android:$gdxVersion"
    natives "com.badlogicgames.gdx:gdx-platform:$gdxVersion:natives-armeabi"
    natives "com.badlogicgames.gdx:gdx-platform:$gdxVersion:natives-armeabi-v7a"
    natives "com.badlogicgames.gdx:gdx-platform:$gdxVersion:natives-arm64-v8a"
    natives "com.badlogicgames.gdx:gdx-platform:$gdxVersion:natives-x86"
    natives "com.badlogicgames.gdx:gdx-platform:$gdxVersion:natives-x86_64"
    implementation "com.badlogicgames.gdx:gdx-box2d:$gdxVersion"
    natives "com.badlogicgames.gdx:gdx-box2d-platform:$gdxVersion:natives-armeabi"
    natives "com.badlogicgames.gdx:gdx-box2d-platform:$gdxVersion:natives-armeabi-v7a"
    natives "com.badlogicgames.gdx:gdx-box2d-platform:$gdxVersion:natives-arm64-v8a"
    natives "com.badlogicgames.gdx:gdx-box2d-platform:$gdxVersion:natives-x86"
    natives "com.badlogicgames.gdx:gdx-box2d-platform:$gdxVersion:natives-x86_64"

    implementation "com.badlogicgames.gdx:gdx:$gdxVersion"
    implementation "com.badlogicgames.gdx:gdx-box2d:$gdxVersion"

    implementation "com.badlogicgames.gdx:gdx-backend-lwjgl:$gdxVersion"
    implementation "com.badlogicgames.gdx:gdx-platform:$gdxVersion:natives-desktop"
    implementation "com.badlogicgames.gdx:gdx-box2d-platform:$gdxVersion:natives-desktop"
}
```

And look up other dependencies you need by either generating a new libgdx project and copying them or you can look them up [here](https://github.com/libgdx/libgdx/wiki/Dependency-management-with-Gradle).

5. Add this task to the end of your file:

```
task copyAndroidNatives() {
    file("libs/armeabi/").mkdirs()
    file("libs/armeabi-v7a/").mkdirs()
    file("libs/arm64-v8a/").mkdirs()
    file("libs/x86/").mkdirs()
    file("libs/x86_64/").mkdirs()

    configurations.getByName("natives").copy().files.each { jar ->
        def outputDir = null
        if (jar.name.endsWith("natives-armeabi-v7a.jar")) outputDir = file("libs/armeabi-v7a")
        if (jar.name.endsWith("natives-armeabi.jar")) outputDir = file("libs/armeabi")
        if (jar.name.endsWith("natives-arm64-v8a.jar")) outputDir = file("libs/arm64-v8a")
        if (jar.name.endsWith("natives-x86.jar")) outputDir = file("libs/x86")
        if (jar.name.endsWith("natives-x86_64.jar")) outputDir = file("libs/x86_64")
        if (outputDir != null) {
            copy {
                from zipTree(jar)
                into outputDir
                include "*.so"
            }
        }
    }
}
```

6. Open your `gradle.properties` file and paste this line:

```
org.gradle.configureondemand=false
```

Now, you should have libgdx integrated.

## How to use libgdx in your Android project

1. You should add the android launcher for libgdx. In my demo it looks like this: 

```
public class Launcher extends AndroidApplication {
    @Override
    protected void onCreate (Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        AndroidApplicationConfiguration config = new AndroidApplicationConfiguration();
        initialize(new MyGame(), config);
    }
}
```
2. Then, you should copy your ApplicationAdapter class, which is basically your libgdx game. In my demo I used the default:

```
public class MyGame extends ApplicationAdapter {
    SpriteBatch batch;
    Texture img;

    @Override
    public void create () {
        batch = new SpriteBatch();
        img = new Texture("badlogic.jpg");
    }

    @Override
    public void render () {
        Gdx.gl.glClearColor(1, 0, 0, 1);
        Gdx.gl.glClear(GL20.GL_COLOR_BUFFER_BIT);
        batch.begin();
        batch.draw(img, 0, 0);
        batch.end();
    }

    @Override
    public void dispose () {
        batch.dispose();
        img.dispose();
    }
}
```
3. Lauch your libgdx game as an Intent in your main activity:

```
startActivity(new Intent(this, Launcher.class));
```
<br/><br/>
Hope everything worked. Good luck developing!