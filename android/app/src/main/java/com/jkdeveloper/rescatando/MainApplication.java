package com.jkdeveloper.rescatando;

import android.app.Application;
import co.apptailor.googlesignin.RNGoogleSigninPackage;
import com.facebook.react.ReactApplication;
import io.invertase.firebase.RNFirebasePackage;

import com.facebook.react.modules.storage.ReactDatabaseSupplier;
import com.reactnativecommunity.asyncstorage.AsyncStoragePackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import io.invertase.firebase.auth.RNFirebaseAuthPackage;
import com.swmansion.gesturehandler.react.RNGestureHandlerPackage;
import com.airbnb.android.react.maps.MapsPackage;
import com.imagepicker.ImagePickerPackage;
import com.agontuk.RNFusedLocation.RNFusedLocationPackage;


import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
          new RNFirebasePackage(),
          new AsyncStoragePackage(),
          new RNGoogleSigninPackage(),
          new RNFirebaseAuthPackage(),
          new RNGestureHandlerPackage(),
          new MapsPackage(),
          new ImagePickerPackage(),
          new RNFusedLocationPackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);

    ReactDatabaseSupplier.getInstance(getApplicationContext()).setMaximumSize(1024L * 1024L * 1024L); // 1 GB in bytes
  }
}
