const DO_NOT_TRACK_VALUE = {
  no: '0',
  yes: '1',
  unspecified: 'unspecified',
};

export class GAOptout {
  constructor(storage) {
    this._gaId = '';
    this._storage = storage || {};
  }

  set gaId(id) {
    this._gaId = id;
  }

  get gaOptoutKey() {
    return `ga-disable-${this._gaId}`;
  }

  enable() {
    window[this.gaOptoutKey] = true;

    if (this._storage.getKey() === null) {
      this._storage.saveKey(this.gaOptoutKey);
    }
  }

  disable() {
    window[this.gaOptoutKey] = false;

    if (this._storage.getKey() !== null) {
      this._storage.deleteKey(this.gaOptoutKey);
    }
  }

  enabled() {
    return (
      window[this.gaOptoutKey] || this._storage.getKey() !== null || this._isDoNotTrackEnabled()
    );
  }

  _isDoNotTrackEnabled() {
    return navigator.doNotTrack === DO_NOT_TRACK_VALUE.yes;
  }
}
