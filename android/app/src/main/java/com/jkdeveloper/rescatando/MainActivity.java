package com.jkdeveloper.rescatando;

import android.os.Bundle;
import android.os.PersistableBundle;
import android.support.annotation.Nullable;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import com.reactnativecommunity.asyncstorage.AsyncStorageModule;
import com.reactnativecommunity.asyncstorage.AsyncStoragePackage;
import com.reactnativecommunity.asyncstorage.ReactDatabaseSupplier;
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;

// react-native-image-picker
import com.imagepicker.permissions.OnImagePickerPermissionsCallback;
import com.facebook.react.modules.core.PermissionListener;

public class MainActivity extends ReactActivity implements OnImagePickerPermissionsCallback {

    @Override
    public void onCreate(Bundle savedInstanceState, PersistableBundle persistentState) {
        super.onCreate(savedInstanceState, persistentState);
        ReactDatabaseSupplier.getInstance(this).setMaximumSize(1024L * 1024L * 1024L); // 1 GB in bytes
    }

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */



    // react-native-image-picker
    private PermissionListener listener; // <- add this attribute

    @Override
    public void setPermissionListener(PermissionListener listener)
    {
      this.listener = listener;
    }

    @Override
    public void onRequestPermissionsResult(int requestCode, String[] permissions, int[] grantResults)
    {
      if (listener != null)
      {
        listener.onRequestPermissionsResult(requestCode, permissions, grantResults);
      }
      super.onRequestPermissionsResult(requestCode, permissions, grantResults);
    }
    // react-native-image-picker

    @Override
    protected String getMainComponentName() {
        return "rescatando";
    }

    @Override
    protected ReactActivityDelegate createReactActivityDelegate() {
      return new ReactActivityDelegate(this, getMainComponentName()) {
        @Override
        protected ReactRootView createRootView() {
         return new RNGestureHandlerEnabledRootView(MainActivity.this);
        }
      };
    }
}
