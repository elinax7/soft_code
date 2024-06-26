<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="fr.herverenault.selfhostedgpstracker"
    android:versionCode="4"
    android:versionName="1.1.1" >

    <uses-sdk
        android:minSdkVersion="7"
        android:targetSdkVersion="17" />

    <uses-permission android:name="android.permission.INTERNET" />
    <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
    <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />

    <application
        android:allowBackup="true"
        android:icon="@drawable/ic_launcher"
        android:label="@string/app_name"
        android:theme="@style/service" >
        <activity
            android:name="fr.herverenault.selfhostedgpstracker.SelfHostedGPSTrackerActivity"
            android:label="@string/app_name" >
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />

                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>
        <service android:name="fr.herverenault.selfhostedgpstracker.SelfHostedGPSTrackerService" />
        <activity android:name="SelfHostedGPSTrackerPrefs" />
    </application>

</manifest>
